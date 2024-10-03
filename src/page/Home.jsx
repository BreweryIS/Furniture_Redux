import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import Catagories from "../components/home/Catagories";
import FeaturedProducts from "../components/home/FeaturedProducts";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full">
        <HeroSlider />
      </div>
      <div className="w-11/12 p-5">
        <div className="title_container p-2">
          <h1 className="title font-bold text-3xl">
            Find Your Style:Furniture Categories
          </h1>
        </div>
        <Catagories />
      </div>
      <div className="w-11/12 p-5">
        <div className="title_container p-2">
          <h1 className="title font-bold text-3xl text-center">
            Discover Our FeaturedProducts
          </h1>
        </div>
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Home;
