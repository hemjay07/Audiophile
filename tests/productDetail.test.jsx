import React from "react";
import { render, screen } from "./test-utils";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "../src/pages/productDetail/productDetail";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

// mock the scrollTo function
window.scrollTo = jest.fn();

test("the correct productDetail page is displayed upon navigation with the param that is for that product ", async () => {
  render(
    <MemoryRouter initialEntries={["/productDetail/3"]}>
      <Routes>
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
      </Routes>
    </MemoryRouter>
  );
  expect(
    screen.getByText(
      /as the gold standard for headphones, the classic xx99 mark i offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go\./i
    )
  );

  //   the counter button is present on the screen
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("1");
});

test("increment and decrement button work on the count", async () => {
  render(
    <MemoryRouter initialEntries={["/productDetail/3"]}>
      <Routes>
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
      </Routes>
    </MemoryRouter>
  );
  const increment = screen.getByRole("button", { name: /\+/i });
  const decrement = screen.getByRole("button", { name: /\-/i });
  const count = screen.getByTestId("count");

  expect(count).toHaveTextContent("1");
  await userEvent.click(increment);
  expect(screen.getByTestId("count")).toHaveTextContent("2");
  await userEvent.click(decrement);
  expect(screen.getByTestId("count")).toHaveTextContent("1");

  //   test that the add to cart button reverts the count to 1 after adding the product to the cart
  const addToCartButton = screen.getByRole("button", { name: /add to cart/i });
  expect(addToCartButton).toBeInTheDocument();
  await userEvent.click(addToCartButton);
  expect(count).toHaveTextContent("1");
});
