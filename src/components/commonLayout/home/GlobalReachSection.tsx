"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Instant Setup with API Integration",
    description:
      "Start using immediately upon account registration, with API access to integrate into existing workflows, all in just a few minutes.",
    image: "https://www.laaffic.com/public/images/index/banner.png",
  },
  {
    title: "Powerful SMS & Voice Solutions",
    description:
      "Reach your customers instantly with high-delivery SMS and reliable voice solutions worldwide.",
    image: "https://www.laaffic.com/public/images/index/banner.png",
  },
  {
    title: "Global Reach & Scalability",
    description:
      "Scale effortlessly with enterprise-grade infrastructure supporting global traffic.",
    image: "https://www.laaffic.com/public/images/index/banner.png",
  },
];

const GlobalReachSection = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative w-full overflow-hidden text-white">

      {/* Gradient Background */}
      <div
        className="absolute inset-0 
        bg-gradient-to-bl 
        from-[#d946ef] 
        via-[#a21caf] 
        to-[#ec4899]"
      />

      {/* Slider */}
      <div className="relative container mx-auto px-6 lg:px-8 py-16 md:py-24">

        {/* Left Arrow */}
        <Button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </Button>

        {/* Right Arrow */}
        <Button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </Button>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center gap-10">

                {/* LEFT IMAGE */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="max-w-md w-full object-contain"
                  />
                </div>

                {/* RIGHT TEXT */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-white/80 text-lg max-w-xl">
                    {slide.description}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GlobalReachSection;
