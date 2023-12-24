// Importing necessary hooks and createContext from React
import React, { useState, useContext, createContext, useEffect } from "react";

// Creating a context for cart
const cartContext = createContext();

// Function to return context from cartContext
const useCartContext = () => {
  // Obtaining context using useContext
  const context = useContext(cartContext);

  // Throw error if context is not within a provider
  if (!context) {
    throw new Error("useCartContext must be used within a context provider");
  }
  return context;
};

// Function to wrap children and provide context
// Value prop is for the test case, used to insert items into cart for individual component tests
function CartProvider({ children, value }) {
  // Getting cart from localStorage or use an empty object as fallback
  const storedCart = JSON.parse(localStorage.getItem("cart")) || {};

  // Using useState to manage cart state
  const [cart, setCart] = useState(value || storedCart);

  // UseEffect hook to store cart in localStorage when cart changes if value is not provided
  // the hook should not the called if the value is provides, that is we are in a test case
  if (!value)
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

  // Returning provider with its value as cart and setCart function, and its children
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
}

// Exporting useCartContext and CartProvider
export { useCartContext, CartProvider };
