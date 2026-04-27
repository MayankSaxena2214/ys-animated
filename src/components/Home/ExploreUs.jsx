"use client"
import React from 'react'
import ThemeButton from '../common/ThemeButton'
import Particles from '../common/Particles'

const ExploreUs = () => {
  return (
    <div className="relative md:px-8 lg:px-16 px-6 md:py-10 lg:py-16 py-6 flex flex-col items-center md:gap-6 gap-4 lg:gap-10">

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

      {/* CONTENT */}
      <div className="relative z-10 font-bold text-2xl md:text-3xl lg:text-4xl text-white text-center flex flex-col gap-2">
        <div>Explore Infinite</div>
        <div>Possibilities with Indium</div>
      </div>

      <div className="relative z-10 text-base md:text-lg lg:text-xl text-white text-center">
        <div>Have a challenge or a big idea? We're here to listen, innovate, and make it happen.</div>
        <div>Reach out today, and let's start shaping the future of your business.</div>
      </div>

        <ThemeButton link="/contact-us" text="Contact" />
      

    </div>
  )
}

export default ExploreUs
