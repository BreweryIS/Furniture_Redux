import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import Catagories from "../components/home/Catagories";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full">
        <HeroSlider />
      </div>
      <div className="w-11/12">
      <div className="title_container">
        <h1 className="title font-bold">
          Find Your Style:Furniture Categories
        </h1>
      </div>
        <Catagories />
      </div>
    </div>
  );
};

export default Home;
