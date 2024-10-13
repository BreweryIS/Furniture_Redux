import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Wishlistoffset = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-lime-100 w-10 h-10 flex justify-center items-center rounded-full hover:bg-lime-300 transition-all ease-linear duration-300"
      >
        <FaRegHeart />
      </button>
      <div
        className={`${
          open ? "translate-x-0" : "translate-x-full"
        } w-full fixed top-0 right-0  h-screen max-h-screen z-50`}
      >
        <div className="bg-white z-[100] w-full max-w-sm h-full ml-auto relative">
          <div className="w-full flex justify-center items-center px-3 py-2">
            <div className="w-11/12">
              <h1 className="font-bold">My Wishlist</h1>
            </div>
            <div className="w-1/12">
              <button onClick={() => setOpen(false)} className="p-3">
                <IoCloseSharp />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`h-full w-full bg-gray-400 z-[60] fixed top-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20`}
        ></div>
      </div>
    </div>
  );
};

export default Wishlistoffset;
