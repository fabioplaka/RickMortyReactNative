import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Card from "./Card";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { CharacterCardTypes } from "../types/CharacterCardTypes";

const CharacterCard = ({
  onPress,
  character,
}: CharacterCardTypes): JSX.Element => {
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
        <Icon name="chevron-right" size={25} style={styles.icon} color="gray" />
      </TouchableOpacity>
    </Card>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  name: {
    fontSize: 17,
    flex: 1,
    marginRight: 20,
  },
  icon: {
    right: 20,
    position: "absolute",
    marginTop: -12,
  },
});
