import React from "react";
import { FaFacebook, FaRegCopyright } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-11/12 h-full mx-auto gap-3 px-3 py-5 flex justify-center items-center">
        <div className="col flex-1">
          <h1 className="logo font-bold text-2xl">Furniture</h1>
          <p className="text-sm text-gray-500 italic py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
            ipsum cupiditate fuga, blanditiis necessitatibus quia temporibus
            alias velit quasi commodi minus accusamus. Repudiandae in qui
            praesentium quisquam reprehenderit obcaecati a.
          </p>
        </div>
        <div className="col flex-1">
          <h1 className="font-bold title py-2 text-2xl">Quick Links</h1>
          <ul className="flex flex-col gap-3 w-fit">
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              Home
            </li>
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              About
            </li>
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              Contact
            </li>
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              Shop
            </li>
          </ul>
        </div>
        <div className="col flex-1">
          <h1 className="font-bold title py-2 text-2xl">Terms & Conditions</h1>
          <ul className="flex flex-col gap-3 w-fit">
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              Privay Policy
            </li>
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              Terms of use
            </li>
          </ul>
        </div>
        <div className="col flex-1">
          <h1 className="font-bold title py-2 text-2xl">Social Links</h1>
          <ul className="flex gap-3 text-2xl w-fit">
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              <button className="p-3 bg-lime-400 hover:bg-lime-500 transition-all ease-linear duration-300 rounded-sm hover:text-white">
                <FaFacebook />
              </button>
            </li>
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              <button className="p-3 bg-lime-400 hover:bg-lime-500 transition-all ease-linear duration-300 rounded-sm hover:text-white">
                <FaSquareInstagram />
              </button>
            </li>
            <li className="font-bold hover:text-lime-400 cursor-pointer">
              <button className="p-3 bg-lime-400 hover:bg-lime-500 transition-all ease-linear duration-300 rounded-sm hover:text-white">
                <FaSquareXTwitter />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-11/12 border-t border-gray-600 justify-between items-center mx-auto py-3">
        <h4 className="flex items-center gap-2 font-semibold">
          <FaRegCopyright /> All rights reserved Furniture 2024.
        </h4>
        <img
          src="./img/card.png"
          alt="card"
          className="w-full h-full max-w-[200px]"
        />
      </div>
    </>
  );
};

export default Footer;
