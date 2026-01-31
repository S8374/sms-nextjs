"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const BrandMarquee = () => {
  const logos = [
    "Kats",
    "Betfair",
    "ROBET.COM",
    "MetaSoft",
    "OWGAMING",
    "Play2OS",
    "X2 SYNDICATE",
    "ECLIVE",
    "ONEBET",
    "PizzaOs",
    "PayTrades",
    "CityAds",
    "UST Gaming",
    "help2my",
    "2J.COM",
    "Gecce",
    "ONEBET",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Thousands of Brands Rely on Laaffic to Power Potential Markets
        </h2>

        {/* Marquee 1: scroll left */}
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="space-x-12 mb-6"
        >
          {logos.map((logo, idx) => (
            <div
              key={`left-${idx}`}
              className="flex-shrink-0 w-32 h-12 flex items-center justify-center"
            >
              <div
                className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center text-xs font-medium text-gray-600 border ml-3.5 border-gray-200"
                aria-label={logo}
              >
                {logo}
              </div>
            </div>
          ))}
        </Marquee>

        {/* Marquee 2: scroll right */}
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          direction="right"
          className="space-x-12"
        >
          {logos.map((logo, idx) => (
            <div
              key={`right-${idx}`}
              className="flex-shrink-0 w-32 h-12 flex items-center justify-center"
            >
              <div
                className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center text-xs font-medium text-gray-600 border ml-3.5 border-gray-200"
                aria-label={logo}
              >
                {logo}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default BrandMarquee;
