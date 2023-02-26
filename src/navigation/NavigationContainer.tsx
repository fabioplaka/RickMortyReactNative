import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStactNavigator from "./MainStack";

export default () => {
  return (
    <NavigationContainer>
      <MainStactNavigator />
    </NavigationContainer>
  );
};
