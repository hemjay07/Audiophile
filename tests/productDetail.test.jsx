import React from "react";
import { render, screen } from "./test-utils";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "../src/pages/productDetail/productDetail";
import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

// Mocking the scrollTo function
window.scrollTo = vi.fn();

// Describe block to group ProductDetail related tests
describe("ProductDetail", () => {
  // This test verifies if navigating with a specific productId param loads the correct ProductDetail page
  test("the correct productDetail page is displayed upon navigation with the param that is for that product ", async () => {
    // Rendering the ProductDetail component within a router having an initial route matching a productId of 3
    render(
      <MemoryRouter initialEntries={["/productDetail/3"]}>
        <Routes>
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    // Verifying the loaded product detail matches the expected description
    expect(
      screen.getByText(
        /as the gold standard for headphones, the classic xx99 mark i offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go\./i
      )
    );

    // Checking if the counter button (indicating product quantity) is present on the screen
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("1");
  });

  // This test validates the increment and decrement functionality of the counter (product quantity) button
  test("increment and decrement button work on the count", async () => {
    // Rendering the ProductDetail component within a router having an initial route matching a productId of 3
    render(
      <MemoryRouter initialEntries={["/productDetail/3"]}>
        <Routes>
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );
    // Getting the increment, decrement, and count DOM elements
    const increment = screen.getByRole("button", { name: /\+/i });
    const decrement = screen.getByRole("button", { name: /\-/i });
    const count = screen.getByTestId("count");

    // Checking if the initial product quantity is 1
    expect(count).toHaveTextContent("1");
    // Simulating a click on the increment button and verifying if the product quantity increased
    await userEvent.click(increment);
    expect(screen.getByTestId("count")).toHaveTextContent("2");
    // Simulating a click on the decrement button and checking if the product quantity decreased
    await userEvent.click(decrement);
    expect(screen.getByTestId("count")).toHaveTextContent("1");

    // This section tests if clicking the "add to cart" button resets the product quantity to 1
    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    // Verifying if the "add to cart" button is present in the DOM
    expect(addToCartButton).toBeInTheDocument();
    // Simulating a click on the "add to cart" button
    await userEvent.click(addToCartButton);
    // After clicking the button, the product quantity should be reset to 1
    expect(count).toHaveTextContent("1");
  });
});
