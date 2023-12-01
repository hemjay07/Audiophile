import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { createContext } from "react";

import Home from "./pages/home/home";
import Earphones from "./pages/earphones/earphones";
import Headphones from "./pages/headphones/headphones";
import Checkout from "./pages/checkout/checkout";
import Speakers from "./pages/speakers/speakers";
import ProductDetail from "./pages/productDetail/productDetail";
import ScrollTo from "./components/scrollTo";
const GlobalStyle = createGlobalStyle`
  p {
    line-height: 1.5625rem;
    font-size: 0.9375rem;
  };
  h2 {
    color: black;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.08038rem;
    line-height: 2.5rem;
  };
  button {
    width: 10rem;
    height: 3rem;
    // background: #4c4c4c;
    // color: #fff;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 700;
    border: none;
    cursor: pointer;
   
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 3.5rem;
      letter-spacing: 0.125rem;
      line-height: 3.625rem; /* 103.571% */

    }
  }

`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const cartContext = createContext();
export default function App() {
  // the key is the Id while the value is the quantity
  const [cart, setCart] = useState({});
  return (
    <Container>
      <ScrollTo />
      <GlobalStyle />
      <cartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
        </Routes>
      </cartContext.Provider>
    </Container>
  );
}
