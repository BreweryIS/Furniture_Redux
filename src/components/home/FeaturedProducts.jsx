import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

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
        setData(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="w-full grid grid-cols-3 gap-4 py-4">
      {data ? 
        data.slice(0,6).map((product) => (
          <div key={product.id}>
            <ProductCard product={product}  />
          </div>
        ))
       : (
        <div>
          <h3>...Loading</h3>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
