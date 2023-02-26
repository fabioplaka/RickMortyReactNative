import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { CharacterCard } from "../CharacterCard";

test("make sure that CharacterCard is called", () => {
  const onPressFn = jest.fn();
  jest.mock("react-native-vector-icons/MaterialCommunityIcons", () => "Icon");
  const { getByTestId } = render(
    <CharacterCard
      onPress={onPressFn}
      character={{ id: "1", name: "test", image: "testImage" }}
    />
  );
  const btn = getByTestId("CharacterCardId");
  fireEvent.press(btn);
  expect(onPressFn).toHaveBeenCalled();
});
