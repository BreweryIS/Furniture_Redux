import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch("./img/Products/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };
    fetchFeaturedProducts();
  }, []);
  console.log(data);
  return (
    <div className="w-full">
      {data &&
        data.products.map((product) => (
          <div key={product.id}>
            <ProductCard />
          </div>
        ))}
    </div>
  );
};

export default FeaturedProducts;
