import React from "react";
// import render from react testing library as rtlRender
import { render as rtlRender } from "@testing-library/react";
// import necessary contexts
import { CartProvider, useCartContext } from "../src/context/cartContext";
// import { BrowserRouter } from "react-router-dom";

// create a functin render that uses wrapper provided from react testing library to wrap the children called with the rtlRender function
function render(ui, { ...options } = {}) {
  function Wrapper({ children }) {
    return <CartProvider>{children}</CartProvider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
