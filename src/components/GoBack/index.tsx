import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../common/Styles";

const GoBack = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Icon
      name="arrow-back-ios"
      size={20}
      color={COLORS.white}
      onPress={() => navigation.goBack()}
    />
  );
};

export { GoBack };
