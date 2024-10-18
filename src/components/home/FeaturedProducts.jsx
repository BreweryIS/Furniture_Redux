import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { FaArrowRight } from "react-icons/fa";

const FeaturedProducts = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("./img/Products/products.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.products))
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await fetch("./img/Products/products.json");
        const data = await res.json();
        if (!res.ok) {
          return console.log("Failed to fetch data");
        }
        setData(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gird-cols-1 gap-4 py-4">
        {data ? (
          data.slice(0, 6).map((product) => (
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
      <div className="flex w-full justify-center">
        <button className="flex gap-2 items-center hover:text-lime-400 transition-all duration-500 ease-linear justify-center mx-auto font-bold">
          view more
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default FeaturedProducts;
