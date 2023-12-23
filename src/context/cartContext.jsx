import React, { useState, useContext, createContext, Children } from "react";

const cartContext = createContext();

//create a function that returns the context from the cartContext
const useCartContext = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a context provider");
  }
  return context;
};

// create a provider that will wrap the children and provide the context
function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
}

export { useCartContext, CartProvider };
