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
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginBottom: 20,
  },
});
