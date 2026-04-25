import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ThemeButton = ({link="/",text="Discover iXie Gaming",containerClass=''}) => {
  return (
    <Link
          href={link}
          className={
            cn(
                " sm:block overflow-hidden bg-orange-600 text-black p-1 rounded-full",
                containerClass
            )
          }
        >
          <div className="relative group flex rounded-full items-center overflow-hidden pl-4 py-1 gap-3">
            <span className="absolute inset-0 bg-black scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>

            <span className="relative z-10 group-hover:text-white">
              {text}
            </span>

            <span className="relative z-10 bg-black text-white p-3 rounded-full">
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
  )
}

export default React.memo(ThemeButton);
