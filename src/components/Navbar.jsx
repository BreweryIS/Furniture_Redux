import React from "react";
import { Link } from "react-router-dom";
import CardOffset from "./CardOffset";
import WishlistOffset from "./WishlistOffset";
import { IoHomeOutline } from "react-icons/io5";
import { BsCart4, BsShop } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
  const navitems = [
    {
      label: "Home",
      path: "/",
      icon: <IoHomeOutline />,
    },
    {
      label: "Shop",
      path: "/shop",
      icon: <BsShop />,
    },
    {
      label: "Cart",
      path: "/cart",
      icon: <BsCart4 />,
    },
    {
      label: "Wishlist",
      path: "wishlist",
      icon: <FaRegHeart />,
    },
  ];
  return (
    <div className="w-full flex justify-center py-4 items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="w-10/12 flex justify-center py-4 px-2 items-center">
        <div className="flex-1">
          <h1 className="logo font-bold text-2xl">Furniture</h1>
        </div>
        <div className="sm:flex-1 sm:w-auto sm:shadow-none shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full flex sm:relative z-50 sm:py-0 py-3 fixed md:bottom-auto bottom-0 sm:bg-transparent bg-white justify-center items-center">
          <ul className="flex gap-2 w-full sm:justify-center justify-around items-center">
            {navitems.map((item, index) => (
              <li key={index} className="sm:bg-transparent bg-lime-400 sm:shadow-none shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] sm:p-0 p-3 sm:rounded-none rounded-full">
                <Link to={item.path}>
                  <span className="sm:block hidden">{item.label}</span>
                  <span className="sm:hidden block text-2xl">{item.icon}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>  
        <div className="flex-1 flex text-xl gap-4 justify-end items-center">
          <WishlistOffset />
          <CardOffset />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
