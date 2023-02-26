import { StyleSheet } from "react-native";
import { COLORS } from "../../common/Styles";

export const styles = StyleSheet.create({
  iconPositionStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginLeft: 10,
  },
  search: {
    flex: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 50,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    borderColor: COLORS.lightGray,
  },
});
