import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  let [isCartOpen, setIsCartOpen] = useState(false);
  let [cartItems, setCartItems] = useState([]);


  const incrementQuantity = (id) => {
    setCartItems((prev) => {
        return prev.map((val) => {
            return val.id === id ? {...val,quantity : val.quantity + 1} : val; 
        });
    });
  };
  const dicrementQuantity = (id) => {
    setCartItems((prev) => {
        let rest = prev.map((val) => {
            return val.id === id ? {...val,quantity : val.quantity - 1} : val; 
        });
        return rest.filter((val) => val.quantity > 0)
    });
  };


  return (
    <MyStore.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems,incrementQuantity,dicrementQuantity }}
    >{children}
    </MyStore.Provider>
  );
};
