import React from "react";
import { Screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./cart";
import { cartContext } from "../src/App";
test("testing cart", () => {
  render(
    <cartContext.Provider>
      <Cart />
    </cartContext.Provider>
  );
  screen.debug();
});
