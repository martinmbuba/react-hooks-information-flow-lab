import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("calls onDarkModeClick when button is clicked", () => {
  const onDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={onDarkModeClick} />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(onDarkModeClick).toHaveBeenCalledTimes(1);
});
