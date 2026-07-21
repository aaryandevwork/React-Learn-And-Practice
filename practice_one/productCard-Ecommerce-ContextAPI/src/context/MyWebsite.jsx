import { createContext, useState } from "react";

export let MyShop = createContext();

export const ContextProvider = ({ children }) => {
  let [isCartOpen, setIsCartOpen] = useState(false);
  let [cartItems, setCartItems] = useState([]);
  console.log("ContextAPI");

  return (
    <MyShop.Provider value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems }} >
      {children}
    </MyShop.Provider>
  ); 
};
