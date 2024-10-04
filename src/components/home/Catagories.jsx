import React, { useEffect, useState } from "react";

const Catagories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./img/Category/categories.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="w-full grid grid-cols-4 md:grid-cols-8 gap-3 py-5 px-2">
      {data.length > 0 &&
        data.map((category, index) => (
          <div
            className="flex flex-col h-32 w-32 justify-center items-center p-3 rounded-full bg-lime-200 hover:bg-lime-400 transition-all duration-500 ease-linear cursor-pointer"
            key={index}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-10 h-10"
            />
            <h1 className="text-sm text-center font-bold py-2 w-full text-nowrap">
              {category.name}
            </h1>
          </div>
        ))}
    </div>
  );
};

export default Catagories;
