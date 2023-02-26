import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { SearchInput } from "../SearchInput";

test("make sure that the SearchInput has proper props", () => {
  const onChangeHandler = jest.fn();
  const { getByTestId } = render(
    <SearchInput onChangeText={onChangeHandler} value={"name"} />
  );
  const props = getByTestId("searchInput").props;
  expect(props).toEqual(
    expect.objectContaining({
      value: "name",
      onChangeText: onChangeHandler,
    })
  );
  fireEvent.changeText(getByTestId("searchInput"), "name");
  expect(onChangeHandler).toHaveBeenCalled();
  expect(onChangeHandler).toHaveBeenCalledWith("name");
});
