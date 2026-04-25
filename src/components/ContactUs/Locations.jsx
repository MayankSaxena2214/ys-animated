"use client"
import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
const Locations = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  const [selectedLocation, setSelectedLocation] = useState("All");
  const locations = [
    "All",
    "United States",
    "United Kingdom",
    "India",
    // "Singapore",
  ];
  const [filteredOffices, setFilteredOffices] = useState([]);

  const offices = [
    // 🇺🇸 United States (10)
    {
      name: "New York Office",
      address: "350 5th Ave, New York, NY 10118",
      country: "United States",
    },
    {
      name: "San Francisco Office",
      address: "1 Market St, San Francisco, CA 94105",
      country: "United States",
    },
    {
      name: "Chicago Office",
      address: "233 S Wacker Dr, Chicago, IL 60606",
      country: "United States",
    },
    {
      name: "Austin Office",
      address: "600 Congress Ave, Austin, TX 78701",
      country: "United States",
    },
    {
      name: "Seattle Office",
      address: "500 Pine St, Seattle, WA 98101",
      country: "United States",
    },
    {
      name: "Boston Office",
      address: "200 Clarendon St, Boston, MA 02116",
      country: "United States",
    },
    {
      name: "Los Angeles Office",
      address: "100 N Main St, Los Angeles, CA 90012",
      country: "United States",
    },
    {
      name: "Dallas Office",
      address: "100 Crescent Ct, Dallas, TX 75201",
      country: "United States",
    },
    {
      name: "Denver Office",
      address: "1700 Lincoln St, Denver, CO 80203",
      country: "United States",
    },
    {
      name: "Atlanta Office",
      address: "1201 Peachtree St, Atlanta, GA 30361",
      country: "United States",
    },

    // 🇬🇧 United Kingdom (6)
    {
      name: "London Office",
      address: "10 Downing St, London SW1A 2AA",
      country: "United Kingdom",
    },
    {
      name: "Manchester Office",
      address: "1 Spinningfields, Manchester M3 3EB",
      country: "United Kingdom",
    },
    {
      name: "Birmingham Office",
      address: "Colmore Row, Birmingham B3 2AA",
      country: "United Kingdom",
    },
    {
      name: "Leeds Office",
      address: "1 Wellington Pl, Leeds LS1 4AP",
      country: "United Kingdom",
    },
    {
      name: "Glasgow Office",
      address: "George Square, Glasgow G2 1DU",
      country: "United Kingdom",
    },
    {
      name: "Edinburgh Office",
      address: "Princes St, Edinburgh EH2 2ER",
      country: "United Kingdom",
    },

    // 🇮🇳 India (10)
    {
      name: "Bangalore Office",
      address: "MG Road, Bengaluru, Karnataka 560001",
      country: "India",
    },
    {
      name: "Delhi Office",
      address: "Connaught Place, New Delhi, 110001",
      country: "India",
    },
    {
      name: "Mumbai Office",
      address: "BKC, Mumbai, Maharashtra 400051",
      country: "India",
    },
    {
      name: "Hyderabad Office",
      address: "HITEC City, Hyderabad, Telangana 500081",
      country: "India",
    },
    {
      name: "Pune Office",
      address: "Hinjewadi Phase 1, Pune, Maharashtra 411057",
      country: "India",
    },
    {
      name: "Chennai Office",
      address: "OMR Road, Chennai, Tamil Nadu 600096",
      country: "India",
    },
    {
      name: "Kolkata Office",
      address: "Salt Lake Sector V, Kolkata 700091",
      country: "India",
    },
    {
      name: "Noida Office",
      address: "Sector 62, Noida, UP 201309",
      country: "India",
    },
    {
      name: "Gurgaon Office",
      address: "Cyber City, Gurgaon, Haryana 122002",
      country: "India",
    },
    {
      name: "Ahmedabad Office",
      address: "SG Highway, Ahmedabad, Gujarat 380015",
      country: "India",
    },

    // 🇸🇬 Singapore (4)
    {
      name: "Singapore HQ",
      address: "1 Raffles Place, Singapore 048616",
      country: "Singapore",
    },
    {
      name: "Marina Bay Office",
      address: "Marina Bay Sands, Singapore 018956",
      country: "Singapore",
    },
    {
      name: "Jurong Office",
      address: "Jurong East, Singapore 609731",
      country: "Singapore",
    },
    {
      name: "Orchard Road Office",
      address: "Orchard Rd, Singapore 238823",
      country: "Singapore",
    },
  ];

  useEffect(() => {
    if (selectedLocation === "All") {
      setFilteredOffices(offices);
    }
    else {
      const filtered = offices.filter(office => office.country === selectedLocation);
      setFilteredOffices(filtered);
    }
  }, [selectedLocation]);
  return (
    <div className='md:px-8 lg:px-16 px-6 md:py-10 lg:py-16 py-2 flex flex-col items-center gap-9'>
      <div className='text-4xl leading-8 flex flex-col gap-3 font-bold text-center'>
        <div>Rooted in Innovation,</div>
        <div>Expanding Across the Globe</div>
      </div>

      <div className="flex items-center p-2  bg-[#EFEAE3]  rounded-full">
        {locations.map((location, index) => (
          <div
            key={index}
            onClick={() => setSelectedLocation(location)}
            className={`px-4 py-2 rounded-full whitespace-nowrap cursor-pointer ${selectedLocation === location ? "bg-white text-black" : "text-gray-700"}`}>
            {location}
          </div>
        ))}
      </div>

      <motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 md:gap-4 gap-3 items-stretch"
>
        {filteredOffices.map((office, index) => {
          return (
            <motion.div
      key={office.id || index}
      variants={card}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className=" rounded-2xl p-5 h-full"
    >
            <div
              // key={index}
              className="bg-[#EDEDED] h-full rounded-2xl md:p-4 p-2 lg:p-6 flex md:gap-4 gap-3 lg:gap-8 hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src="https://www.indium.tech/wp-content/uploads/2025/04/UNITED-STATES.png" // 👉 replace with your image path
                alt="office"
                className="w-40 h-40 object-cover rounded-lg"
              />

              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-black">
                    {office.name}
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm leading-6">
                    Indium Software Inc <br />
                    {office.address}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="mt-4">
                  <p className="text-gray-600 text-sm mb-2">
                    Toll Free: +1 (888) 207 5969
                  </p>

                  <button className="cursor-pointer  text-orange-500 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    <div className='lg:text-base text-xs'>View Directions </div>
                    <ArrowRight className='h-4 w-4' />
                  </button>
                </div>
              </div>
            </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  )
}

export default Locations
