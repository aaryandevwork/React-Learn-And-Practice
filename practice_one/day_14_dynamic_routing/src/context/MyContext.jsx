import { Children, createContext, useState } from "react";

export const Mystore = createContext();

export const ContextProvider = ({ children }) => {
  let [productData, setProductData] = useState([]);



    console.log(productData);

  return (
    <Mystore.Provider value={{ productData, setProductData }}>
      {children}
    </Mystore.Provider>
  );
};
