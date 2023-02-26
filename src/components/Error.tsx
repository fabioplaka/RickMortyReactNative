import React from "react";
import { StyleSheet, Text } from "react-native";

const Error = (): JSX.Element => {
  return <Text style={styles.errorText}>Something went wrong!</Text>;
};

export default Error;

const styles = StyleSheet.create({
  errorText: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 17,
    marginTop: 20,
  },
});
