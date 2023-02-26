import { StyleSheet } from "react-native";

export const COLORS = {
  white: "#FFFFFF",
  lightGreen: "#43ADAD",
  black: "#000000",
  lightGray: "#F0F2F2",
  gray: "#808080",
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  headerStyle: {
    backgroundColor: COLORS.lightGreen,
  },
  headerTitleStyle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  noMoreText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 14,
  },
});
