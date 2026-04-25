"use client";

import React from "react";
import { motion } from "framer-motion";

const BrandSection = () => {
  const images = [
    "https://www.indium.tech/wp-content/uploads/2025/03/brand-logo-1.svg",
    "https://www.indium.tech/wp-content/uploads/2025/03/brand-logo-2.svg",
    "https://www.indium.tech/wp-content/uploads/2025/03/brand-logo-3.svg",
    "https://www.indium.tech/wp-content/uploads/2025/03/brand-logo-4.svg",
    "https://www.indium.tech/wp-content/uploads/2025/03/brand-logo-5.svg",
    "https://www.indium.tech/wp-content/uploads/2025/03/brand-logo-6.svg",
    "https://www.indium.tech/wp-content/uploads/2025/03/brand-logo-10.svg",
    "https://www.indium.tech/wp-content/uploads/2025/03/brand-logo-8.svg",
    "https://www.indium.tech/wp-content/uploads/2025/03/brand-logo-9.svg",
  ];

  return (
    <div className="flex flex-col gap-8 overflow-hidden md:px-8 lg:px-16 px-6 md:py-10 lg:py-16 py-6">
      <div className="text-center text-white text-2xl font-semibold">
        Brands that Believe in Us
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
        >
          {/* ORIGINAL */}
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-[70px] object-contain flex-shrink-0"
              alt=""
            />
          ))}

          {/* DUPLICATE */}
          {images.map((img, i) => (
            <img
              key={`dup-${i}`}
              src={img}
              className="h-[70px] object-contain flex-shrink-0"
              alt=""
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandSection;