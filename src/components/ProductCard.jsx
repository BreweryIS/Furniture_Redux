import React from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { addToWishlist } from "../slices/wishlistSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
    }
  };
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="w-full group h-full cursor-pointer">
      <div className="relative overflow-hidden rounded-xl">
        <img src={product.images[0]} alt={product.name} />
        <div className="absolute -bottom-20 w-full group-hover:bottom-2 transition-all duration-500 ease-in-out">
          <button
            onClick={handleAddToCart}
            className={`${
              isInCart
                ? "bg-gray-200 hover:bg-gray-400"
                : "bg-lime-200 hover:bg-lime-400"
            } w-11/12 block mx-auto mx-auto transition-all duration-500 ease-linear py-2`}
          >
            {isInCart ? "Item in Cart" : "Add to Cart"}
          </button>
        </div>
        <div className="p-2 text-xl flex flex-col absolute top-2 -right-20 group-hover:right-2 transition-all duration-500 ease-in-out gap-3">
          <button
            onClick={handleAddToWishlist}
            className="bg-lime-200 hover:bg-lime-400 transition-all duration-500 ease-linear p-3 rounded-full"
          >
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
          <h4 className="font-bold text-lime-600">$ {product.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
