import React from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full group h-full cursor-pointer">
      <div className="relative overflow-hidden rounded-xl">
        <img src={product.images[0]} alt={product.name} />
        <div className="absolute -bottom-20 w-full group-hover:bottom-2 transition-all duration-500 ease-in-out">
          <button className="w-11/12 block mx-auto mx-auto bg-lime-200 hover:bg-lime-400 transition-all duration-500 ease-linear py-2">
            Add to Cart
          </button>
        </div>
        <div className="p-2 text-xl flex flex-col absolute top-2 -right-20 group-hover:right-2 transition-all duration-500 ease-in-out gap-3">
          <button className="bg-lime-200 hover:bg-lime-400 transition-all duration-500 ease-linear p-3 rounded-full">
            <FaRegHeart />
          </button>
          <button className="bg-lime-200  hover:bg-lime-400 transition-all duration-500 ease-linear p-3 rounded-full">
            <FaRegEye />
          </button>
        </div>
      </div>
      <div className="py-3 px-3">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">{product.name}</h1>
          <h4 className="font-bold text-lime-500">{product.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
