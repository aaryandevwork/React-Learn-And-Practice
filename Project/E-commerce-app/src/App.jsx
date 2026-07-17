import { use, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import CartCard from "./components/CartCard";
import CartScreen from "./pages/CartScreen";

function App() {

  let [productData, setProductData] = useState([]);
  let [isCartOpen, setIsCartOpen] = useState(false);
  let [cartItems, setCartItems] = useState([]);

  // console.log(cartItems);

  const getProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log("error is : ", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="bg-gray-900 h-full flex flex-col p-4">
      <Navbar setIsCartOpen={setIsCartOpen} />

      {isCartOpen ? (
        // <CartCard  />
        <CartScreen cartItems={cartItems}/>
      ) : (
        <div className="grid grid-cols-4 m-3">
          {productData.map((elem) => {
            return <ProductCard key={elem.id} product={elem} setCartItems={setCartItems} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
