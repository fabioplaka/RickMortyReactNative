import React from "react";
import { View, StyleSheet } from "react-native";
import { CardType } from "../types/CardType";

const EpisodeCard = ({ children }: CardType) => {
  return <View style={styles.card}>{children}</View>;
};

export default EpisodeCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderBottomColor: "#43ADAD",
    borderBottomWidth: 2,
    flexDirection: "row",
  },
});
