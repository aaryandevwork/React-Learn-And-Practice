import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import ProtectedRaute from "./ProtectedRaute";

const AppRountes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <ProtectedRaute>
              <About />
            </ProtectedRaute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default AppRountes;
