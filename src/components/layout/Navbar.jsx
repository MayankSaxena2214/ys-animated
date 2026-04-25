"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import ThemeButton from "../common/ThemeButton";

const Navbar = () => {
  const menuItems = [
    "Who we are",
    "What we do",
    "The Lifter",
    "Industries",
    "Subsidiaries",
    "Insights",
  ];
  

  return (
    <div className="flex items-center justify-between md:px-16 px-6 md:py-5 py-3 bg-black/90 sticky top-0 z-50">
      
      {/* LOGO */}
      <Link href="/" className="text-3xl md:text-4xl text-white font-bold flex items-center">
        <div>I</div>
        <div className="text-orange-700">N</div>
        <div>DIUM</div>
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex items-center gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group">
            <div className="flex items-center gap-2 text-white cursor-pointer">
              <span className="group-hover:text-orange-500 transition">
                {item}
              </span>
              <ChevronDown className="group-hover:rotate-180 transition" />
            </div>

            {/* Dropdown */}
            <div className="absolute top-full left-0 w-[300px] bg-black/95 border border-white/10 rounded-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 p-5">
              <div className="flex flex-col gap-4 text-white">
                <p className="hover:text-orange-500 cursor-pointer">Company Overview</p>
                <p className="hover:text-orange-500 cursor-pointer">News & Events</p>
                <p className="hover:text-orange-500 cursor-pointer">Careers</p>
                <p className="hover:text-orange-500 cursor-pointer">Locations</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        <ThemeButton
        link="/contact-us"
            text="Contact Us"
            containerClass="hidden"

        />

        

        {/* MOBILE SHEET */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white">
                <Menu size={28} />
              </button>
            </SheetTrigger>
            
            <SheetContent
  side="right"
  className="bg-black text-white border-none w-[85%] sm:w-[400px] flex flex-col h-full"
>
    <SheetTitle className={`px-3 py-3 `}>
                <Link href="/" className="text-3xl md:text-4xl text-white font-bold flex items-center">
        <div>I</div>
        <div className="text-orange-700">N</div>
        <div>DIUM</div>
      </Link>
            </SheetTitle>
  {/* SCROLLABLE AREA */}
  <div className="flex-1 overflow-y-auto p-4 pr-2">
    
    <div className="flex flex-col gap-6">
      {menuItems.map((item, index) => (
        <div key={index} className="border-b border-gray-700 pb-3">
          
          <div className="flex justify-between items-center cursor-pointer">
            <span className="text-lg">{item}</span>
            <ChevronDown />
          </div>

          <div className="mt-3 pl-2 flex flex-col gap-2 text-sm text-gray-300">
            <p>Company Overview</p>
            <p>News & Events</p>
            <p>Careers</p>
            <p>Locations</p>
          </div>
        </div>
      ))}
    </div>

  </div>

  {/* FIXED FOOTER BUTTON */}
  <div className="pt-4 p-4 border-t border-gray-700">
    <SheetClose asChild>
      <Link
        href="/contact-us"
        className="bg-orange-600 text-black rounded-full px-6 py-3 text-center font-semibold block"
      >
        Contact Us
      </Link>
    </SheetClose>
  </div>
</SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// "use client";

// import React, { useState } from "react";
// import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     "Who we are",
//     "What we do",
//     "The Lifter",
//     "Industries",
//     "Subsidiaries",
//     "Insights",
//   ];

//   return (
//     <>
//       <div className="flex items-center justify-between md:px-16 px-6 md:py-5 py-3 bg-black/90 sticky top-0 z-50">
        
//         {/* LOGO */}
//         <Link href={'/'} className="text-3xl md:text-4xl text-white font-bold flex items-center">
//           <div>I</div>
//           <div className="text-orange-700">N</div>
//           <div>DIUM</div>
//         </Link>

        

//         {/* DESKTOP MENU */}
//         <div className="hidden lg:flex items-center gap-6">
//           {menuItems.map((item, index) => (
//             <div key={index} className="relative group">
//               <div className="flex items-center gap-2 text-white cursor-pointer">
//                 <span className="group-hover:text-orange-500 transition">
//                   {item}
//                 </span>
//                 <ChevronDown className="group-hover:rotate-180 transition" />
//               </div>

//               {/* Dropdown */}
//               <div className="absolute top-full left-0 w-[300px] bg-black/95 border border-white/10 rounded-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 p-5">
//                 <div className="flex flex-col gap-4 text-white">
//                   <p className="hover:text-orange-500 cursor-pointer">Company Overview</p>
//                   <p className="hover:text-orange-500 cursor-pointer">News & Events</p>
//                   <p className="hover:text-orange-500 cursor-pointer">Careers</p>
//                   <p className="hover:text-orange-500 cursor-pointer">Locations</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="flex items-center gap-4">
          
//           {/* CONTACT BUTTON */}
//           <Link
//             href={"/contact-us"}
//             className="hidden sm:block overflow-hidden bg-orange-600 text-black p-1 rounded-full"
//           >
//             <div className="relative group flex rounded-full items-center overflow-hidden pl-4 py-1 gap-3">
//               <span className="absolute inset-0 bg-black scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>

//               <span className="relative z-10 group-hover:text-white">
//                 Contact Us
//               </span>

//               <span className="relative z-10 bg-black text-white p-3 rounded-full">
//                 <ArrowRight className="h-4 w-4" />
//               </span>
//             </div>
//           </Link>

//           {/* HAMBURGER */}
//           <button
//             className="lg:hidden text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`lg:hidden bg-black text-white px-6 transition-all duration-300 overflow-hidden ${
//           isOpen ? "max-h-[600px] py-6" : "max-h-0"
//         }`}
//       >
//         <div className="flex flex-col gap-6">
//           {menuItems.map((item, index) => (
//             <div key={index} className="border-b border-gray-700 pb-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-lg">{item}</span>
//                 <ChevronDown />
//               </div>

//               {/* Static dropdown (can make collapsible later) */}
//               <div className="mt-3 pl-2 flex flex-col gap-2 text-sm text-gray-300">
//                 <p>Company Overview</p>
//                 <p>News & Events</p>
//                 <p>Careers</p>
//                 <p>Locations</p>
//               </div>
//             </div>
//           ))}

//           {/* CONTACT BUTTON MOBILE */}
//           <Link
//             href={"/contact-us"}
//             className="bg-orange-600 text-black rounded-full px-6 py-3 text-center font-semibold"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;