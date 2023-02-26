import React from "react";
import { EpisodeCard } from "../EpisodeCard";
import { render } from "@testing-library/react-native";
import { Text } from "react-native";

test("make sure EpisodeCard to  display name and air_date", () => {
  const { getByText } = render(
    <EpisodeCard>
      <Text>episodeName</Text> <Text>episodeAirDate</Text>
    </EpisodeCard>
  );
  expect(getByText("episodeName")).not.toBeNull();
  expect(getByText("episodeAirDate")).not.toBeNull();
});
