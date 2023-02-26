import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

const Error: React.FC = () => {
  return <Text style={styles.errorText}>Something went wrong!</Text>;
};

export { Error };
