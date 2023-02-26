import { StyleSheet } from "react-native";
import { COLORS } from "../../common/Styles";

export const styles = StyleSheet.create({
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
