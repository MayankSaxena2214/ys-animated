"use client";

import { MapPin, Phone } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


export default function Footer() {
  const sections = [
    {
      title: "Artificial Intelligence",
      links: ["Gen AI", "Agentic AI", "AI/ML Solutions", "AI/MLOps"],
    },
    {
      title: "Data & Analytics",
      links: [
        "Data Engineering",
        "Data Governance",
        "Data Modernization",
        "Data Streaming",
        "Data Annotation",
      ],
    },
    {
      title: "Intelligent Automation",
      links: [
        "Low-Code",
        "Process Mining",
        "Smart Workflows",
        "Robotic Process Automation",
      ],
    },
    {
      title: "Product Engineering",
      links: [
        "App Modernization",
        "Mobile Development",
        "Devops",
        "Cloud Engineering",
      ],
    },
    {
      title: "Quality Engineering",
      links: [
        "IoT Testing",
        "LLM Testing",
        "Test Automation",
        "DevOps Testing",
      ],
    },
    {
      title: "Industry Expertise",
      links: [
        "BFSI",
        "Healthcare",
        "Technology",
        "Manufacturing",
        "Retail",
      ],
    },
  ];

  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-20 py-12">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        
        {/* LEFT INFO */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">INDIUM</h2>

          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Indium is an AI services company that specializes in Agentic AI,
            Data & Analytics, Application Engineering, and Quality Engineering.
          </p>

          <div className="flex items-start gap-3 mb-3">
            <MapPin size={18} className="text-orange-500 mt-1" />
            <p className="text-sm text-gray-300">
              Cupertino, CA 95014-2358, USA
            </p>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Phone size={18} className="text-orange-500" />
            <p className="text-sm text-gray-300">+1 (888) 207 5969</p>
          </div>

          <div>
            <p className="text-orange-500 font-semibold mb-2">
              Subsidiaries:
            </p>
            <p className="text-sm text-gray-300">Experion Technologies</p>
          </div>
        </div>

        {/* RIGHT LINKS GRID */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-orange-500 font-semibold mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="hover:text-white cursor-pointer transition"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-sm text-gray-400">
        
        <p className="text-center md:text-left">
          © 2026 All Rights Reserved | Indium Software (India) Private Limited |
          Privacy Policy | Sitemap | SEBI Disclosures
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-white">
            

          <FaSquareXTwitter className="cursor-pointer h-5 w-5 hover:text-orange-500"/>
          <FaInstagramSquare className="cursor-pointer h-5 w-5 hover:text-orange-500" />
          <FaLinkedin className="cursor-pointer h-5 w-5 hover:text-orange-500" />
          <FaFacebookSquare className="cursor-pointer h-5 w-5 hover:text-orange-500" />
        </div>
      </div>
    </footer>
  );
}