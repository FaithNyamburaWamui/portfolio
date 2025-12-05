"use client";
import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Buildmart Progresive Web App",
    description: "An online shop for construction materials in Kenya.",
    image: "/images/5165201 3.png",
    url: "https://inyange-frontend-azbb.vercel.app/",
  },
  {
    title: "Buildmart Informational",
    description:
      "Website providing information about the Buildmart progesive Web App and its developers.",
    image: "/images/buildmart.png",
    url: "https://inyange-informational-zw55.vercel.app/",
  },
  {
    title: "Kipepeo Design",
    description:
      "Kipepeo Website is desiged to showcasing different women clothes and the process of adding the items to cart and viewing offers.",
    image: "/images/kipepeo.png",
    url: "https://www.behance.net/gallery/202385033/Kipepeo",
  },
  {
    title: "Akira Oil Design",
    description:
      "Akira Oil is desiged for displaying gas tanks and their various prices.",
    image: "/images/akiraoil.png",
    url: "https://www.figma.com/design/Q5RH8RLDmCdlhX4RInkqIj/Akira-Oil?node-id=0-1&node-type=canvas&t=A01kqx9LZEuDIxdf-0",
  },
  {
    title: "Milk Collection Design",
    description:
      "Mobile app design which has two user who are the agents and the milk farmers used for providing a central platform where they can both communicate.",
    image: "/images/milks.png",
    url: "https://www.figma.com/design/UC097osPeeQl4rotVhbciK/Milk-Collection?node-id=1-30&node-type=canvas&t=MGMKBlv8EClWLitT-0",
  },
  {
    title: "Food House website",
    description:
      "Food House is a website showcase different kinds of food and coded using Nextjs.",
    image: "/images/food.png",
    url: "https://foodwebsite-m8dd.vercel.app/",
  },
];

export default function Projects() {
  const handleProjectClick = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="project"
      className="bg-[#010C04] text-white py-12 sm:py-16 mt-[-7%] xl:mt-[-3%] md:mt-[-33%] lg:mt-[-6%]"
    >
      <div className="max-w-full sm:max-w-[90%] md:max-w-[90%] lg:max-w-[70%] xl:max-w-[90%] px-4 sm:px-6 md:px-10 lg:px-14 mx-auto">
        <h2 className="text-[28px] xl:text-[30px] sm:text-[32px] md:text-[35px] text-[#53C218] font-semibold mb-8 sm:mb-10 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-20 sm:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={384}
                className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => handleProjectClick(project.url)}
                  className="px-5 sm:px-7 py-2 sm:py-3 bg-[#419414] text-black font-semibold rounded-lg shadow-lg hover:bg-[#53C218] text-[14px] sm:text-[16px]"
                >
                  View Project
                </button>
              </div>
              {/* Project Details */}
              <div className="mt-4 sm:mt-6 md:mt-[30px]">
                <h3 className="text-xl xl:text-[23px] sm:text-2xl md:text-3xl font-medium">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2 text-[15px] sm:text-[16px] md:text-[17px]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
