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
    <div className="w-full sm:w-[calc(50%-2.5rem)] lg:w-[calc(50%-2.5rem)] xl:w-[calc(40%-2.5rem)] xl:h-[430px] bg-[#419414] px-3 py-24 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:bg-[#53C218] hover:shadow-xl">
      <section id="services">
        <div className="flex flex-col items-center mb-4">
          <Icon className="w-32 h-24 xl:h-[78px] text-yellow-300 mb-6 mt-[-20px] xl:mt-[-50px]" />
        </div>
        <h3 className="text-[22px] xl:text-[20px] font-semibold text-white mb-4 ml-[40px]">
          {title}
        </h3>
      </section>

      <ul className="space-y-3 flex flex-col items-start w-full px-6 sm:px-8 md:px-10">
        {services.map((service, index) => (
          <li
            key={index}
            className="text-white text-[17px] flex items-start w-full"
          >
            <span className="w-3 h-3 bg-white rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
            <span className="flex-1 text-left">{service}</span>
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
    <div className="min-h-screen bg-[#010C04] p-4 sm:p-6 md:p-8 xl:mt-[-130px] mt-[-2px] md:mt-[-50px]">
      <h2 className="text-[28px] xl:text-[32px] sm:text-[32px] md:text-[35px] font-bold text-[#53C218] text-center">
        Services
      </h2>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 mt-9">
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
