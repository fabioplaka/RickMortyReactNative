import { StyleSheet } from "react-native";
import { COLORS } from "../../common/Styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: COLORS.white,
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
