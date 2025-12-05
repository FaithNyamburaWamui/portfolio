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
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 xl:mt-[-40px] mt-[-20px] md:mt-[-100px] lg:mt-[-30px]">
          <div className="flex flex-col justify-center space-y-8 sm:space-y-12">
            {/* Header */}
            <h2 className="text-[28px] xl:text-[30px] sm:text-[32px] md:text-[35px] font-bold text-[#53C218] text-center mt-[20px] sm:mt-[30px]">
              Stacks
            </h2>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-16 w-full">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl bg-gray-900/50 hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm border border-gray-800 hover:border-[#53C218]"
                >
                  <skill.Icon
                    className="w-12 h-12 xl:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  <span className="text-[15px] sm:text-[17px] md:text-[19px] xl:text-[19px] font-medium text-gray-300 group-hover:text-white text-center">
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
