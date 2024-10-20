import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import { Link } from "react-router-dom";

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("./img/Hero_Slider/slider.json")
      .then((response) => response.json())
      .then((data) => setSlides(data.heroSlider))
      .catch((error) => console.log(`Error:`, error));
  }, []);
  const isLoopEnabled = slides.length > 1

  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={isLoopEnabled}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        // modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.length > 0 &&
          slides.map((slide) => (
            <SwiperSlide key={slide.id} className="max-h-[90vh] relative">
              <img src={slide.image} alt={`Slide${slide.id}`} />
              <div className="text_container absolute top-[30%] text-center w-full h-full">
                <h1 className="font-bold md:text-5xl sm:text-2xl text-xl text-slate-800">
                  {slide.title}
                </h1>
                <p className="text-sm italic py-3 text-gray-100">
                  {slide.subtitle}
                </p>

                <Link to={slide.link}>
                  <button className="rounded-md font-bold bg-lime-400 py-3 px-5 text-sm hover:bg-lime-600 transition ease-in duration-200">{slide.buttonText}</button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
