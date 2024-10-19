import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";

const CardOffset = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-lime-100 relative w-10 h-10 flex justify-center items-center rounded-full hover:bg-lime-300 transition-all ease-linear duration-300"
      >
        <span className="absolute bg-red-500 text-white text-xs top-0 -right-2 h-4 w-4 justify-center items-center rounded-full">
          {cartItems.length}
        </span>
        <RiShoppingCartLine />
      </button>
      <div
        className={`${
          open ? "translate-x-0" : "translate-x-full"
        } w-full fixed top-0 right-0  h-screen max-h-screen z-50`}
      >
        <div className="bg-white z-[100] w-full max-w-sm h-full ml-auto relative overflow-y-scroll">
          <div className="w-full flex justify-center items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div className="w-full flex justify-center items-center px-3 py-2">
              <div className="w-11/12">
                <h1 className="font-bold">My Cart</h1>
              </div>
              <div className="w-1/12">
                <button onClick={() => setOpen(false)} className="p-3">
                  <IoCloseSharp />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-3">
            <ul>
              {cartItems.length > 0 ?
                cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="my-3 bg-gray-50 px-2 py-3 group cursor-pointer w-full"
                  >
                    <div className="grid grid-cols-12 items-center w-full">
                      <div className="w-24 h-24 overflow-hidden col-span-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="col-span-7">
                        <h1 className="font-bold text-lg">{item.name}</h1>
                        <h4 className="text-lime-400 text-sm py-2">
                          $ {item.price}
                        </h4>
                      </div>
                      <div className="col-span-1">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                        >
                          <FaRegTrashCan />
                        </button>
                      </div>
                    </div>
                  </li>
                )):(
                  <h1 className="text-center py-3 px-2 font-semibold">
                    Your Cart is Empty!
                  </h1>
                )}
            </ul>
          </div>
        </div>
        <div
          className={`h-full w-full bg-gray-400 z-[60] fixed top-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20`}
        ></div>
      </div>
    </div>
  );
};

export default CardOffset;
