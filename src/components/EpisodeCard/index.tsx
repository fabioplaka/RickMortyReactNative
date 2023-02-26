import React from "react";
import { View } from "react-native";
import { ChildrenType } from "../../types/ChildrenType";
import { styles } from "./styles";

interface EpisodeProps {
  children: ChildrenType;
}

const EpisodeCard: React.FC<EpisodeProps> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export { EpisodeCard };
