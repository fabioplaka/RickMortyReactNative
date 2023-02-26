import { useLazyQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { GET_CHARACTERS } from "../apollo/queries";
import CharacterCard from "../components/CharacterCard";
import Error from "../components/Error";
import SearchInput from "../components/SearchInput";
import { Character } from "../types/CharacterCardTypes";
import { CharactersListTypes } from "../types/CharacterTypes";

const CharacterList: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [searchValue, setSearchValue] = useState<string>("");

  const [getCharacters, { data, loading, error }] =
    useLazyQuery<CharactersListTypes>(GET_CHARACTERS, {
      variables: { page: 1 },
    });

  const handleSearchInput = (text: string): void => {
    setSearchValue(text);
  };

  const handleCharacter = (character: Character) => {
    navigation.navigate("CharacterDetails", {
      id: character.id,
      name: character.name,
    });
  };

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const charactersData = data && data.characters;
  const results = charactersData ? charactersData.results : null;

  return (
    <View style={styles.container}>
      <SearchInput onChangeText={handleSearchInput} value={searchValue} />
      {loading && <ActivityIndicator color="#43ADAD" size={"large"} />}
      {error ? (
        <Error />
      ) : (
        results && (
          <FlatList
            data={results}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <CharacterCard character={item} onPress={handleCharacter} />
            )}
          />
        )
      )}
    </View>
  );
};

export default CharacterList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
});
