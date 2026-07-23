import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstace";


const ProductPage = () => {

    let [productData,setProductData] = useState([]);
    let [isLoading,setIsLoading] = useState(true);

    const getProductData = async () => {
        try {
            // let res = await axios.get("https://fakestoreapi.com/products");
            let res = await axiosInstance.get("/products");
            setProductData(res.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        } 
    }

    useEffect(() => {
        getProductData();
    },[])

    if(isLoading){
        return <h1>Users loading</h1>
    }

    return(
        <div className="grid grid-cols-4 gap-2">
            {productData.map((val) => {
                return <ProductCard key={val.id} product={val} />
            })}
        </div>
    )
}

export default ProductPage;