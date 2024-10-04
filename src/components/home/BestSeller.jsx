import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { FaArrowRight } from "react-icons/fa";

const BestSeller = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("./img/Products/products.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.products))
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    const fetchBestSeller = async () => {
      try {
        const res = await fetch("./img/Products/products.json");
        const data = await res.json();
        setData(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBestSeller();
  }, []);

  return (
    <>
      <div className="w-full grid grid-cols-3 gap-4 py-4">
        {data ? (
          data.slice(3, 9).map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div>
            <h3>Loading...</h3>
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

export default BestSeller;
