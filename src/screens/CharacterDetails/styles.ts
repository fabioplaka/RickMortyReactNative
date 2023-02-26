import { StyleSheet } from "react-native";
import { COLORS } from "../../common/Styles";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  name: {
    marginVertical: 15,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "200",
  },
  gender: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  episodes: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: COLORS.lightGreen,
    color: COLORS.white,
  },
  episodeNumber: {
    width: 30,
  },
});
