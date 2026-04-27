"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const GAP = 24; // gap-6 = 24px

const Spotlight = () => {
  const data = [
    {
      image: "https://www.indium.tech/wp-content/uploads/2026/03/Mastering-AI-Agents.png",
      title: "Mastering AI Agents: Your Ultimate Handbook to Agentic AI",
      ctaText: "Read the complete handbook",
      ctaLink: "/",
    },
    {
      image: "https://www.indium.tech/wp-content/uploads/2026/03/Reducing-Delays.png",
      title: "How AI Reduced Medicare Enrollment Delays by 70%",
      ctaText: "Read the success story",
      ctaLink: "/",
    },
    {
      image: "https://www.indium.tech/wp-content/uploads/2026/03/Agentic-AI-Automates-End-to-End-Logistics-Data-Operations-at-200x-Scale-1.png",
      title: "Assessing a Massive 4GL Legacy Architecture",
      ctaText: "Read the success story",
      ctaLink: "/",
    },
    {
      image: "https://www.indium.tech/wp-content/uploads/2026/03/Agentic-AI-Automates-End-to-End-Logistics-Data-Operations-at-200x-Scale-1.png",
      title: "Another Case Study",
      ctaText: "Read the success story",
      ctaLink: "/",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const cardRef = useRef(null);
  const containerRef = useRef(null);

  // ✅ responsive items
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ✅ measure card width based on container
  useEffect(() => {
    const measure = () => {
      if (containerRef.current && cardRef.current) {
        const containerWidthValue = containerRef.current.offsetWidth;
        setContainerWidth(containerWidthValue);
        
        // Calculate card width based on items per view
        const calculatedCardWidth = (containerWidthValue - (GAP * (itemsPerView - 1))) / itemsPerView;
        setCardWidth(calculatedCardWidth + GAP);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [itemsPerView]);

  // ✅ loop logic with proper bounds
  const maxIndex = data.length;

  const next = () => {
    setCurrent((prev) => {
      if (prev + itemsPerView >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prev = () => {
    setCurrent((prev) => {
      if (prev <= 0) {
        return Math.max(0, maxIndex - itemsPerView);
      }
      return prev - 1;
    });
  };

  return (
    <div className="md:px-8 lg:px-16 px-6 md:py-10 lg:py-16 py-6 flex flex-col gap-10">
      
      <div className="text-4xl text-white text-center font-semibold">
        Spotlight
      </div>

      {/* CAROUSEL CONTAINER */}
      <div ref={containerRef} className="overflow-hidden w-full">
        <motion.div
          className="flex"
          style={{ gap: `${GAP}px` }}
          animate={{
            x: -(current * (cardWidth)),
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              className="flex-shrink-0"
              style={{ 
                width: cardWidth > 0 ? `${cardWidth - GAP}px` : 'auto',
              }}
            >
              <div className="flex flex-col gap-6 bg-black/40 p-4 rounded-xl h-full">
                
                <img
                  src={item.image}
                  className="rounded-lg lg:h-[300px] object-cover w-full"
                  alt={item.title}
                />

                <div className="text-white text-lg font-semibold line-clamp-2 min-h-[3.5rem]">
                  {item.title}
                </div>

                <Link
                  href={item.ctaLink}
                  className="text-orange-400 flex items-center gap-2 hover:text-orange-600 transition-colors"
                >
                  <span className="text-sm md:text-base">{item.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* BUTTONS */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="bg-white cursor-pointer rounded-full p-3 hover:bg-gray-200 transition-colors"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-5 w-5 text-black" />
        </button>

        <button
          onClick={next}
          className="bg-white cursor-pointer rounded-full p-3 hover:bg-gray-200 transition-colors"
          aria-label="Next slide"
        >
          <ArrowRight className="h-5 w-5 text-black" />
        </button>
      </div>

      {/* Optional: Dots indicator */}
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: Math.ceil(data.length / itemsPerView) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx * itemsPerView)}
            className={`h-2 rounded-full transition-all ${
              Math.floor(current / itemsPerView) === idx
                ? "w-8 bg-orange-500"
                : "w-2 bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide group ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Spotlight;
// "use client";

// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Link from "next/link";
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// const GAP = 24; // gap-6 = 24px

// const Spotlight = () => {
//   const data = [
//     {
//       image: "https://www.indium.tech/wp-content/uploads/2026/03/Mastering-AI-Agents.png",
//       title: "Mastering AI Agents: Your Ultimate Handbook to Agentic AI",
//       ctaText: "Read the complete handbook",
//       ctaLink: "/",
//     },
//     {
//       image: "https://www.indium.tech/wp-content/uploads/2026/03/Reducing-Delays.png",
//       title: "How AI Reduced Medicare Enrollment Delays by 70%",
//       ctaText: "Read the success story",
//       ctaLink: "/",
//     },
//     {
//       image: "https://www.indium.tech/wp-content/uploads/2026/03/Agentic-AI-Automates-End-to-End-Logistics-Data-Operations-at-200x-Scale-1.png",
//       title: "Assessing a Massive 4GL Legacy Architecture",
//       ctaText: "Read the success story",
//       ctaLink: "/",
//     },
//     {
//       image: "https://www.indium.tech/wp-content/uploads/2026/03/Agentic-AI-Automates-End-to-End-Logistics-Data-Operations-at-200x-Scale-1.png",
//       title: "Another Case Study",
//       ctaText: "Read the success story",
//       ctaLink: "/",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);
//   const [cardWidth, setCardWidth] = useState(0);

//   const cardRef = useRef(null);

//   // ✅ responsive items
//   useEffect(() => {
//     const update = () => {
//       if (window.innerWidth >= 1024) setItemsPerView(3);
//       else if (window.innerWidth >= 768) setItemsPerView(2);
//       else setItemsPerView(1);
//     };

//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   // ✅ measure card width
//   useEffect(() => {
//     const measure = () => {
//       if (cardRef.current) {
//         setCardWidth(cardRef.current.offsetWidth + GAP);
//       }
//     };

//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   // ✅ loop logic
//   const maxIndex = data.length;

//   const next = () => {
//     setCurrent((prev) => (prev + 1) % maxIndex);
//   };

//   const prev = () => {
//     setCurrent((prev) => (prev - 1 + maxIndex) % maxIndex);
//   };

//   // duplicate for smooth illusion
//   const extendedData = [...data, ...data];

//   return (
//     <div className="md:px-8 lg:px-16 px-6 md:py-10 lg:py-16 py-6 flex flex-col gap-10">
      
//       <div className="text-4xl text-white text-center font-semibold">
//         Spotlight
//       </div>

//       {/* CAROUSEL */}
//       <div className="overflow-hidden">
//         <motion.div
//           className="flex gap-6"
//           animate={{
//             x: -(current * cardWidth),
//           }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         >
//           {extendedData.map((item, index) => (
//             <div
//               key={index}
//               ref={(el) => {
//   if (index === 0) cardRef.current = el;
// }}
//               className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] flex-shrink-0"
//             >
//               <div className="flex flex-col gap-6 bg-black/40 p-4 rounded-xl h-full">
                
//                 <img
//                   src={item.image}
//                   className="rounded-lg lg:h-[300px] object-cover"
//                   alt=""
//                 />

//                 <div className="text-white text-lg truncate font-semibold">
//                   {item.title}
//                 </div>

//                 <Link
//                   href={item.ctaLink}
//                   className="text-orange-400 flex items-center gap-2 hover:text-orange-600"
//                 >
//                   <span>{item.ctaText}</span>
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>

//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* BUTTONS */}
//       <div className="flex items-center justify-center gap-6">
//         <button
//           onClick={prev}
//           className="bg-white cursor-pointer rounded-full p-3"
//         >
//           <ArrowLeft className="h-5 w-5 text-black" />
//         </button>

//         <button
//           onClick={next}
//           className="bg-white cursor-pointer rounded-full p-3 rotate-180"
//         >
//           <ArrowLeft className="h-5 w-5 text-black" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Spotlight;