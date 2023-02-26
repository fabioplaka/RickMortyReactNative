import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Card from "./Card";
import { SearchInputType } from "../types/SearchInputType";

const SearchInput = ({ onChangeText, value }: SearchInputType) => {
  return (
    <Card>
      <View style={styles.iconPositionStyle}>
        <Icon
          name={"magnify"}
          size={25}
          style={styles.searchIcon}
          color="gray"
        />
        <TextInput
          style={styles.search}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
      </View>
    </Card>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  iconPositionStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginLeft: 10,
  },
  search: {
    flex: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 50,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    borderColor: "#F0F2F2",
  },
});
