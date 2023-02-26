import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialIcons";

const GoBack = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Icon
      name="arrow-back-ios"
      size={20}
      color="#ffffff"
      onPress={() => navigation.goBack()}
    />
  );
};

export default GoBack;
