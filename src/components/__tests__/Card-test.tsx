import React from "react";
import { render } from "@testing-library/react-native";
import { Card } from "../Card";
import { Text } from "react-native";

test("Card component has been rendered", () => {
  const { getByTestId } = render(
    <Card>
      <Text>This is a test.</Text>
    </Card>
  );
  expect(getByTestId("Card")).toBeDefined();
});
