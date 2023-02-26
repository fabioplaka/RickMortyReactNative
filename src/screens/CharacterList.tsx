import { useLazyQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GET_CHARACTERS } from "../apollo/queries";
import CharacterCard from "../components/CharacterCard";
import Error from "../components/Error";
import SearchInput from "../components/SearchInput";
import { useDebounce } from "../hooks/useDebounce";
import { Character } from "../types/CharacterCardTypes";
import { CharactersListTypes } from "../types/CharacterTypes";

const CharacterList: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const flatlistRef = useRef<any>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  // get characted api call
  const [getCharacters, { data, fetchMore, loading, error }] =
    useLazyQuery<CharactersListTypes>(GET_CHARACTERS, {
      variables: { page: 1 },
    });

  // debounced value
  let debouncedSearchTerm = useDebounce(searchValue, 500);

  // search character
  const handleSearchInput = (text: string): void => {
    setSearchValue(text);
    searchHandler(debouncedSearchTerm);
  };

  // search character handler
  const searchHandler: (value: string) => void = async (value) => {
    if (value !== null) {
      getCharacters({
        variables: {
          filter: {
            name: value,
          },
        },
      });
    } else {
      getCharacters();
    }
  };

  // navigate to character details
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
  const showNoMoreMessage =
    charactersData &&
    !charactersData.info.next &&
    charactersData.info.pages > 1;
  const results = charactersData ? charactersData.results : null;
  const loadMore = charactersData && charactersData.info.next && !isLoading;

  // fetch more charactes when the list has reach the end
  const loadMoreCharactersHandler = async () => {
    if (!loadMore || !fetchMore) {
      return null;
    } else {
      setIsLoading(true);
      await fetchMore({
        variables: {
          page: data?.characters.info.next,
        },
      });
      setIsLoading(false);
    }
  };

  // flat list footer component
  const renderFooter = () => {
    if (data && isLoading) {
      return <ActivityIndicator color="#43ADAD" size={"small"} />;
    } else if (showNoMoreMessage) {
      return <Text style={styles.noMoreText}>There is no more characters</Text>;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <SearchInput onChangeText={handleSearchInput} value={searchValue} />
      {loading && <ActivityIndicator color="#43ADAD" size={"large"} />}
      {error ? (
        <Error />
      ) : (
        results && (
          <FlatList
            ref={flatlistRef}
            data={results}
            // if we scroll down deep, some items has the same id
            // to avoid the Warning: Encountered two children with the same key
            // I have use index
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <CharacterCard character={item} onPress={handleCharacter} />
            )}
            initialNumToRender={4}
            onEndReached={loadMoreCharactersHandler}
            ListFooterComponent={renderFooter}
            maxToRenderPerBatch={1}
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
  noMoreText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 14,
  },
});
