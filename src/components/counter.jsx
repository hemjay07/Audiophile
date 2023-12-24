import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";

// Create a styled component for counter controls
const CounterControler = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  width: 7.5rem;
  background: #f1f1f1;

  button {
    width: unset;
    font-size: unset;
    font-style: normal;
    font-weight: unset;
    border: none;
    opacity: 0.25;
  }
`;

/**
 * Counter component for managing the quantity of a product in the cart.
 * @param {Object} props - The component props.
 * @param {string} props.productId - The ID of the product.
 * @returns {JSX.Element} The Counter component.
 */
export default function Counter({ productId }) {
  // Retrieve cart context
  const { cart, setCart } = useCartContext();

  // if this product is not in the cart, add it to the cart with a quantity of 0
  if (!cart[productId]) {
    setCart((prev) => ({ ...prev, [productId]: 1 }));
  }

  // const [cart, setCart] = useState({ 1: 2 });

  /**
   * Add a product to the cart.
   */
  function handleAdd() {
    setCart((prev) => {
      return { ...prev, [productId]: cart[productId] + 1 };
    });
  }

  /**
   * Handles the subtraction process in the cart.
   * If the quantity of the product is 1, it deletes the product from the cart.
   * Otherwise, it decrement the quantity by 1.
   */
  function handleSubtract() {
    setCart((prev) => {
      const quantity = prev[productId];
      if (quantity == 1) {
        const { [productId]: deletedProduct, ...otherItems } = prev;
        return otherItems;
      } else {
        return { ...prev, [productId]: cart[productId] - 1 };
      }
    });
  }

  // Return complete counter controller UI
  return (
    <CounterControler>
      <button onClick={handleSubtract}>-</button>
      <h1 data-testid="count">{cart[productId]}</h1>
      <button onClick={handleAdd}>+</button>
    </CounterControler>
  );
}
