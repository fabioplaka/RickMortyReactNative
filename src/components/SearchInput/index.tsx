import React from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Card } from "../Card";
import { COLORS } from "../../common/Styles";
import { styles } from "./styles";

export interface SearchInputProps {
  onChangeText: (text: string) => void;
  value: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChangeText, value }) => {
  return (
    <Card>
      <View style={styles.iconPositionStyle}>
        <Icon
          name={"magnify"}
          size={25}
          style={styles.searchIcon}
          color={COLORS.gray}
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

export { SearchInput };
