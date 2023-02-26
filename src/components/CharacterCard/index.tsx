import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Card } from "../Card";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Character } from "../../types/CharacterCardTypes";
import { COLORS } from "../../common/Styles";
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
    <Card>
      <TouchableOpacity
        style={styles.container}
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
    </Card>
  );
};

export { CharacterCard };
