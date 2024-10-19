import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import SortDropDown from "./SortDropDown";

const ProductList = () => {
  const [initialProducts, setInitialProducts] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await fetch("./img/Products/products.json");
        const data = await res.json();
        if (!res.ok) {
          return console.log("Failed to fetch data");
        }
        setData(data.products);
        setInitialProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <div className="flex justify-end items-center w-full">
        <SortDropDown products={initialProducts} SortedData={setData} />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {data.length > 0 ? (
          data.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div>
            <h3>...Loading</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
