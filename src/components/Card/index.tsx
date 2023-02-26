import React from "react";
import { View } from "react-native";
import { ChildrenType } from "../../types/ChildrenType";
import { styles } from "./styles";

interface CardProps {
  children: ChildrenType;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <View testID="Card" style={styles.shadow}>
      {children}
    </View>
  );
};

export { Card };
