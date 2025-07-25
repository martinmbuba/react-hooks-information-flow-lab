import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("calls onCategoryChange when select value changes", () => {
  const onCategoryChange = jest.fn();
  render(<Filter onCategoryChange={onCategoryChange} />);
  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "Dairy" } });
  expect(onCategoryChange).toHaveBeenCalledTimes(1);
});
