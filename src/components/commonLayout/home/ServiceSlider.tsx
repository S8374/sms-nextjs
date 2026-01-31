"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

const slides = [
  {
    title: "Service Solution",
    description:
      "AI Group Call with Post-call SMS and Call Center products intelligently routes calls to human customer service based on user responses, greatly enhancing marketing effectiveness and service efficiency.",
    image: "https://www.laaffic.com/public/images/index/i_31.png", // Replace with your illustration image
  },
  {
    title: "Powerful Analytics",
    description:
      "Monitor your campaign performance in real-time with detailed insights and analytics for informed decision making.",
    image: "https://www.laaffic.com/public/images/index/i_33.png",
  },
  {
    title: "Global Reach",
    description:
      "Scale effortlessly with enterprise-grade infrastructure supporting global traffic and instant customer connections.",
    image: "https://www.laaffic.com/public/images/index/i_32.png",
  },
];

const ServiceSlider = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative flex items-center gap-10">

          {/* Left Text + Arrows */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">{slides[activeIndex].title}</h2>
            <p className="text-gray-700 text-lg mb-6">{slides[activeIndex].description}</p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-lg text-white hover:opacity-90 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-lg text-white hover:opacity-90 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination */}
            <div className="mt-4 text-gray-400">
              <span>{`0${activeIndex + 1}`}</span>
              <span className="mx-2">—</span>
              <span>{`0${slides.length}`}</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={slides[activeIndex].image}
              alt={slides[activeIndex].title}
              className="max-w-lg w-full object-contain"
            />
          </div>
        </div>

        {/* Swiper (hidden, only for autoplay and index tracking) */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceSlider;
