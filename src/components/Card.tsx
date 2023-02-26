import React from "react";
import { StyleSheet, View } from "react-native";
import { CardType } from "../types/CardType";

const Card = ({ children }: CardType) => {
  return <View style={styles.shadow}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
  },
});
