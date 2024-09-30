import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const navitems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "Cart",
      path: "/cart",
    },
    {
      label: "Whishlist",
      path: "whishlist",
    },
  ];
  return (
    <div className="w-full flex justify-center py-4 items-center">
      <div className="w-10/12 flex justify-center py-4 px-2 items-center">
        <div className="flex-1">
          <h1 className="logo font-bold text-2xl">Furniture</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <ul className="flex gap-2 justify-center items-center">
            {navitems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex text-xl gap-2 justify-end items-center">
          <FaRegHeart />
          <RiShoppingCartLine />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
