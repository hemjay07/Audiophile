import React from "react";
import { screen, render } from "./test-utils";
import userEvent from "@testing-library/user-event";
import Counter from "../src/components/counter";
import { expect } from "vitest";

test("counter shows when the product is added to the cart", async () => {
  render(<Counter productId={1} />);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
  const increment = screen.getByRole("button", { name: "+" });
  const decrement = screen.getByRole("button", { name: "-" });
  await userEvent.click(increment);
  expect(screen.getByTestId("count")).toHaveTextContent("1");
  await userEvent.click(decrement);
  expect(count).toHaveTextContent("0");
});
