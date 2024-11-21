"use client";
import React from "react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiKotlin,
  SiFigma,
  SiDjango,
  SiPython,
} from "react-icons/si";

const AboutMe = () => {
  const skills = [
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { Icon: SiReact, name: "React", color: "#61DAFB" },
    { Icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
    { Icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
    { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { Icon: SiDjango, name: "Django", color: "#092E20" },
    { Icon: SiPython, name: "Python", color: "#3776AB" },
  ];

  return (
    <section id="stacks">
    <div className="min-h-screen bg-[#010C04] text-white">
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col  justify-center space-y-12">
          {/* Header */}
          <h2 className="text-[35px] font-bold text-[#53C218] text-center mt-[30px]">
            Stacks
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-16 w-full">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-12 rounded-xl bg-gray-900/50 hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm border border-gray-800 hover:border-[#53C218]"
              >
                <skill.Icon
                  className="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="text-[19px] font-medium text-gray-300 group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutMe;