import React from "react";
import { StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CharacterList from "../screens/CharacterList";
import CharacterDetails from "../screens/CharacterDetails";
import GoBack from "../components/GoBackButton";

const Stack = createNativeStackNavigator();

const MainStactNavigator = () => {
  const goBack = () => <GoBack />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
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
        options={({ route }) => ({
          headerTitle: route.params?.name,
          headerLeft: () => goBack(),
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStactNavigator;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#43ADAD",
  },
  headerTitleStyle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
