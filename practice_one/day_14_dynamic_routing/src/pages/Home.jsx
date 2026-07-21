
import axios from "axios";
import { useContext, useEffect } from "react";
import { Mystore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";

const Home = () =>{

    let {productData,setProductData} = useContext(Mystore);
    
    const getApiData = async() => {
        try {
            let res = await axios.get("https://fakestoreapi.com/products");
            setProductData(res.data);
        } catch (error) {
            console.log("error is -> ", error);
        }
    }

    
    useEffect(() => {
        getApiData();
    },[]);


    return (
        <div>
            <div className="grid grid-cols-4 gap-3">
                {productData.map((val) => {
                    return <ProductCard key={val.id} product={val}/>
                })}
            </div>
        </div>
    )
}

export default Home;