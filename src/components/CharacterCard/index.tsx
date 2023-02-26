import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Character } from "../../types/CharacterCardTypes";
import { COLORS, STYLES } from "../../common/Styles";
import { styles } from "./styles";

export interface CharacterCardProps {
  onPress: (id: Character) => void;
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  onPress,
  character,
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={[styles.container, STYLES.shadow]}
      onPress={() => onPress(character)}
    >
      <Image
        source={{
          uri: character.image,
        }}
        style={styles.image}
      />
      <Text style={styles.name} numberOfLines={2}>
        {character.name}
      </Text>
      <Icon
        name="chevron-right"
        size={25}
        style={styles.icon}
        color={COLORS.gray}
      />
    </TouchableOpacity>
  );
};

export { CharacterCard };
