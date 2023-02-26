import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchInput from "../components/SearchInput";

const CharacterList: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchInput = (text: string): void => {
    setSearchValue(text);
  };

  return (
    <View style={styles.container}>
      <SearchInput onChangeText={handleSearchInput} value={searchValue} />
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
