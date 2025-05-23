"use client";

import React from "react";
import { FaPython } from "react-icons/fa6";
import { FiPenTool } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

interface Service {
  title: string;
  Icon: React.ElementType;
  services: string[];
}

interface ServiceCardProps {
  title: string;
  Icon: React.ElementType;
  services: string[];
}

const ServiceCard = ({ title, Icon, services }: ServiceCardProps) => {
  return (
    <div className="w-full md:w-[calc(35%-1rem)] bg-[#419414] px-3 py-24 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:bg-[#53C218] hover:shadow-xl">
      <section id="services">
        <div className="flex flex-col items-center mb-4">
          <Icon className="w-32 h-24 text-yellow-400 mb-6 mt-[-20px]" />
          <h3 className="text-[22px] font-semibold text-white mb-2 text-center">
            {title}
          </h3>
        </div>
      </section>

      <ul className="space-y-3 flex flex-col items-center w-full">
        {services.map((service, index) => (
          <li
            key={index}
            className="text-white text-[17px] flex items-center w-full px-28 whitespace-nowrap"
          >
            <span className="w-3 h-3 bg-white rounded-full mr-3 flex-shrink-0"></span>
            <span className="flex-1">{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServicesGrid = () => {
  const services: Service[] = [
    {
      title: "UI & UX Design",
      Icon: FiPenTool,
      services: [
        "Visual identity & logo",
        "Brand materials design",
        "UI/UX interface design",
        "Custom illustrations",
      ],
    },
    {
      title: "Frontend Development",
      Icon: FaCode,
      services: [
        "Creation of responsive websites",
        "HTML, CSS & JavaScript",
        "Using NextJs, React and coreUi for styling",
        "Website performance",
      ],
    },
    {
      title: "Mobile Development",
      Icon: FaMobileAlt,
      services: [
        "Building Interfaces",
        "Responsive Layouts",
        "Api Intergrations",
        "Testing and Debugging",
      ],
    },
    {
      title: "Python",
      Icon: FaPython,
      services: [
        "Regular website updates",
        "Website performance tracking",
        "24/7 support",
        "Technical issue resolution",
      ],
    },
  ];

  return (
      <div className="min-h-screen bg-[#010C04] p-8 xl:mt-[-16%]">
        <h2 className="text-[35px] font-bold text-white mb-6 text-center">
          Services
        </h2>
        <div className="flex flex-wrap justify-center gap-20 mt-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              Icon={service.Icon}
              services={service.services}
            />
          ))}
        </div>
      </div>
  );
};

export default ServicesGrid;
