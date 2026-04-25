"use client";
import React from "react";
import { motion } from "framer-motion";
import Particles from "../common/Particles";

const HeroSection = () => {
  return (
    <div className="relative w-full flex flex-col items-center gap-8 md:px-8 lg:px-16 px-6 md:py-10 lg:py-16 py-6 text-center overflow-hidden">
        {/* BACKGROUND PARTICLES */}
      <div className='absolute inset-0 z-0'>

      <Particles
        className="absolute inset-0 z-10"
        particleColors={["#EA580C"]}
        particleCount={500}
        particleSpread={10}
        speed={0.7}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
      />
      </div>
      
      <div className="max-w-5xl flex flex-col gap-10">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
        //   animate={{ opacity: 1, y: 0 }}
          

           whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
        >
          An <span className="text-orange-600">AI</span> Services Company
        </motion.div>

        {/* IMAGE */}
        <motion.img
  src="https://www.indium.tech/wp-content/uploads/2026/04/Option-2-Indium-BANNER-2.png"
  alt="hero"
  className="mx-auto"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
  viewport={{ once: false }}
/>
      </div>
    </div>
  );
};

export default HeroSection;