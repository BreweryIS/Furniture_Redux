import React from "react";
import ProductList from "../components/shop/ProductList";
import SortDropDown from "../components/shop/SortDropDown";

const Shop = () => {
  return (
    <>
    <div className="flex justify-end items-center w-full">
        <SortDropDown />
    </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-11/12 py-4">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Shop;
