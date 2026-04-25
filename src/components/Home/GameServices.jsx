import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ThemeButton from '../common/ThemeButton'

const GameServices = () => {
    const data=[
        {
            image:"https://www.indium.tech/wp-content/uploads/2025/03/game-1.jpg",
            title:"Game QA",
            desc:"Your players demand perfection. So do we."
        },
        {
            image:"https://www.indium.tech/wp-content/uploads/2025/03/game-2.jpg",
            title:"Game Development",
            desc:"Built for performance. Designed for players."
        },
        {
            image:"https://www.indium.tech/wp-content/uploads/2025/03/game-3.jpg",
            title:"Specialized Services",
            desc:"Smart Decisions for big wins."
        },
        {
            image:"https://www.indium.tech/wp-content/uploads/2025/03/game-4.jpg",
            title:"Game Art & Animation",
            desc:"We turn your vision into reality."
        }
    ]
  return (
    <div className='flex flex-col items-center gap-10 md:px-8 bg-white lg:px-16 px-6 md:py-10 lg:py-16 py-6'>
      <img className='h-[115px] w-auto mx-auto' src="https://www.indium.tech/wp-content/uploads/2025/12/iXie-by-indium-logos-02.png" alt="" />
    
       <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 items-stretch'>
        {
            data.map((item,index)=>{
                return <div key={index} className="h-full flex flex-col ">
  
  <img
    src={item.image}
    className="h-[180px] w-full object-cover"
    alt=""
  />

  <div className="px-5 py-6 bg-black/90 text-white flex flex-col flex-grow">
    
    <div className="font-bold text-xl">{item.title}</div>
    
    <div className="text-gray-400 mt-8 flex-grow">
      {item.desc}
    </div>

  </div>
</div>
            })
        }
       </div>

        <ThemeButton
        link='/'
        />



    </div>
  )
}

export default GameServices
