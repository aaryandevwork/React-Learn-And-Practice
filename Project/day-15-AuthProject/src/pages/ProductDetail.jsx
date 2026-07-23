import axios from "axios";
import { Heart, ShieldCheck, ShoppingCart, Star, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../config/axiosInstace";

const ProductDetail = () => {

    let { id } = useParams();

    let [singleProductData , setSingleProductData] = useState({});
  
    const getSingleProductData = async () => {
        try {
            let res = await axiosInstance.get(`/products/${id}`);
            setSingleProductData(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleProductData();
    },[])

  return (
    <div className="max-h-[60%] bg-gray-100 py-8">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white p-8 shadow-lg">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center rounded-xl bg-gray-100 p-10">
            <img
              src={singleProductData?.image}
              alt={singleProductData?.title}
              className="h-[500px] object-contain transition duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Category */}
            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold capitalize text-blue-700">
              {singleProductData?.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-800">
              {singleProductData?.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-lg bg-green-600 px-3 py-1 text-white">
                <Star size={18} className="fill-white" />
                {singleProductData.rating?.rate}
              </div>

              <span className="text-gray-500">
                {singleProductData.rating?.count} Reviews
              </span>
            </div>

            {/* Price */}
            <div>
              <h2 className="text-5xl font-bold text-green-600">
                ${singleProductData.price}
              </h2>

              <p className="mt-2 text-sm text-green-700">
                Inclusive of all taxes
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                Product Description
              </h3>

              <p className="leading-8 text-gray-600">{singleProductData.description}</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-lg border p-4">
                <Truck className="text-blue-600" />
                <div>
                  <p className="font-semibold">Free Delivery</p>
                  <p className="text-sm text-gray-500">2-4 Business Days</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border p-4">
                <ShieldCheck className="text-green-600" />
                <div>
                  <p className="font-semibold">Secure Payment</p>
                  <p className="text-sm text-gray-500">100% Protected</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
                <ShoppingCart />
                Add to Cart
              </button>

              <button className="rounded-xl border border-red-400 p-4 text-red-500 transition hover:bg-red-500 hover:text-white">
                <Heart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
