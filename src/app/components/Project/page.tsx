"use client";
import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Buildmart Progresive Web App",
    description: "An online shop for construction materials in Kenya.",
    image: "/images/5165201 3.png",
    url: "https://inyange-frontend-azbb.vercel.app/", // URL for this project
  },
  {
    title: "Buildmart Informational",
    description:
      "Website providing information about the Buildmart progesive Web App and its developers.",
    image: "/images/buildmart.png",
    url: "https://inyange-informational-zw55.vercel.app/", // Placeholder; replace with actual URL if available
  },
  {
    title: "Kipepeo Design",
    description:
      "Kipepeo Website is desiged to showcasing different women clothes and the process of adding the items to cart and viewing offers.",
    image: "/images/kipepeo.png",
    url: "https://www.behance.net/gallery/202385033/Kipepeo", // URL for this project
  },
  {
    title: "Akira Oil Design",
    description:
      "Akira Oil is desiged for displaying gas tanks and their various prices.",
    image: "/images/akiraoil.png",
    url: "https://www.figma.com/design/Q5RH8RLDmCdlhX4RInkqIj/Akira-Oil?node-id=0-1&node-type=canvas&t=A01kqx9LZEuDIxdf-0", // Placeholder; replace with actual URL if available
  },
  {
    title: "Milk Collection Design",
    description:
      "Mobile app design which has two user who are the agents and the milk farmers used for providing a central platform where they can both communicate.",
    image: "/images/milks.png",
    url: "https://www.figma.com/design/UC097osPeeQl4rotVhbciK/Milk-Collection?node-id=1-30&node-type=canvas&t=MGMKBlv8EClWLitT-0", // Placeholder; replace with actual URL if available
  },

  {
    title: "Mkulima Mobile App Design",
    description:
      "Mobile app design which has two user who are the agents and the chicken farmers used for providing a central platform where they can both communicate.",
    image: "/images/chicken.png",
    url: "https://www.figma.com/design/RvTgRWqwcJ8G3VKKZt86mi/Mkulima-Mobile-App?node-id=21-183&node-type=canvas&t=MGMKBlv8EClWLitT-0", // Placeholder; replace with actual URL if available
  },
];

export default function Projects() {
  const handleProjectClick = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="project" className="bg-[#010C04] text-white py-16">
      <div className="max-w-[70%] px-14 sm:px-10 ml-[15%]">
        <h2 className="text-[35px] font-semibold mb-10 text-center">
          Latest Work -{" "}
          <span className="text-[#53C218] text-[35px]">
            Explore My Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                className="w-[140%] h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => handleProjectClick(project.url)}
                  className="px-7 py-3 bg-[#53C218] text-black font-semibold rounded-lg shadow-lg hover:bg-green-300 text-[16px]"
                >
                  View Project
                </button>
              </div>
              {/* Project Details */}
              <div className="mt-[30px]">
                <h3 className="text-3xl font-medium">{project.title}</h3>
                <p className="text-gray-400 mt-2 text-[17px]">
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
