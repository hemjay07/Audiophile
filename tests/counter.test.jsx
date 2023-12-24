import React from "react";
import { screen, render } from "./test-utils";
import userEvent from "@testing-library/user-event";
import Counter from "../src/components/counter";
import { describe, expect } from "vitest";

describe("Counter", () => {
  test("counter shows when the product is added to the cart", async () => {
    render(<Counter productId={1} />);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("1");
    const increment = screen.getByRole("button", { name: "+" });
    const decrement = screen.getByRole("button", { name: "-" });
    await userEvent.click(increment);
    expect(screen.getByTestId("count")).toHaveTextContent("2");
    await userEvent.click(decrement);
    expect(count).toHaveTextContent("1");
  });
});
