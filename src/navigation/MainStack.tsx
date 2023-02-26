import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CharacterList } from "../screens/CharacterList";
import { CharacterDetails } from "../screens/CharacterDetails";
import { GoBack } from "../components/GoBack";
import { STYLES } from "../common/Styles";

const Stack = createNativeStackNavigator();

const MainStactNavigator = () => {
  const goBack = () => <GoBack />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: STYLES.headerStyle,
        headerTitleStyle: STYLES.headerTitleStyle,
      }}
    >
      <Stack.Screen
        name="CharacterList"
        component={CharacterList}
        options={{ title: "Character List" }}
      />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetails}
        options={({}) => ({
          headerTitle: "",
          headerLeft: () => goBack(),
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStactNavigator;
