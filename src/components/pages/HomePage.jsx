import React from 'react'
import HeroSection from '../Home/HeroSection'
import BrandSection from '../Home/BrandSection'
import Spotlight from '../Home/Spotlight'
import FreshTakes from '../Home/FreshTakes'
import GameServices from '../Home/GameServices'
import ExploreUs from '../Home/ExploreUs'

const HomePage = () => {
  return (
    <div className='flex flex-col w-full'>
      <HeroSection />
      <BrandSection/>
      <Spotlight/>
      <FreshTakes/>
      <GameServices/>
      <ExploreUs/>
    </div>
  )
}

export default HomePage
