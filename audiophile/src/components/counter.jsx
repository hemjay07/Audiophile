import React, { useState, useContext } from "react";
import { cartContext } from "../App";
import styled from "styled-components";
const CounterControler = styled.div`
  display: flex;
  // border: solid 3px blue;
  align-items: baseline;
  justify-content: space-evenly;
  width: 7.5rem;
  background: #f1f1f1;
  button {
    width: unset;
    // background: #4c4c4c;
    // color: #fff;
    font-size: unset;
    font-style: normal;
    font-weight: unset;
    border: none;
    opacity: 0.25;
  }
`;
export default function ({ productId }) {
  // const [count, setCount] = useState(productQuantity);

  const { cart, setCart } = useContext(cartContext);

  function handleAdd() {
    setCart((prev) => {
      return { ...prev, [productId]: cart[productId] + 1 };
    });
  }
  function handleSubtract() {
    setCart((prev) => {
      const quantity = prev[productId];
      console.log(quantity, "aohoewgnwng");
      if (quantity == 1) {
        const { [productId]: deletedProduct, ...otherItems } = prev;
        return otherItems;
      } else {
        return { ...prev, [productId]: cart[productId] - 1 };
      }
    });
  }

  return (
    <CounterControler>
      <button
        // onClick={() => {
        //   count > 1 ? setCount((prev) => prev - 1) : null;
        // }}
        onClick={handleSubtract}
      >
        -
      </button>
      <h1>{cart[productId]}</h1>
      <button
        // onClick={() => setCount((prev) => prev + 1)}
        onClick={handleAdd}
      >
        +
      </button>
    </CounterControler>
  );
}
