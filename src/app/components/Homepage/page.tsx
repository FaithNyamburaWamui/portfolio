"use client";
import { useState, useEffect } from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import Image from "next/image";

const Homepage = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "UX/UI Designer",
    "Frontend Developer",
    "Mobile Developer",
    "Python Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home">
      <div className="min-h-screen flex flex-col lg:flex-row w-full inset-0 overflow-hidden bg-[#010C04] mt-[-20px] lg:mt-[-50px]">
        <div className="w-full lg:w-3/4 sm:p-6 md:p-8 lg:p-16 flex flex-col lg:mt-0 xl:mt-[-13%] xl:ml-[-85px]">
          <h1 className="mt-3 xl:text-start xl:text-[38px] xl:mt-44 text-[30px] sm:text-[32px] md:text-[40px] lg:text-start lg:text-[30px] text-white mb-2 font-semibold text-center sm:ml-[20px] md:text-center xl:ml-[150px] hover:text-[#53C218] transition-colors duration-200">
            Faith Nyambura
          </h1>

          <p className="text-white mb-5 text-center sm:ml-[20px] md:text-center lg:text-start xl:text-start xl:ml-[150px] xl:mt-[-8px] text-[21px] sm:text-[22px] md:text-[30px] lg:text-[24px] hover:text-[#53C218] transition-all duration-500 xl:text-[23px]">
            I am a <span className="text-[#53C218]">{roles[roleIndex]}</span>
          </p>

          <p className="text-[16px] sm:text-[17px] md:text-[20px] lg:text-[18px] leading-relaxed text-white sm:text-wrap md:w-[80%] md:ml-[80px] lg:w-[70%] xl:w-[63%] xl:mt-[-8px] ml-[10px] sm:ml-[20px] lg:ml-[10px] xl:ml-[150px] xl:text-[18px] hover:text-[#53C218] transition-colors duration-200">
            Faith is a creative person and has always been interested in how
            technology works and integrates with other fields to increase
            productivity. She is passionate about leveraging technology to
            create impactful solutions by designing user-friendly and reliable
            applications that meet user needs. I am skilled in creating
            responsive web applications using React.JS and building apps using
            Android. I can contribute to teams and create technology solutions
            to solve existing problems.
          </p>

          <button className="border-[#53C218] border-2 text-white xl:px-6 px-5 lg:px-10 xl:py-2 py-3 lg:py-4 rounded-full w-fit hover:bg-[#53C218] transition-colors duration-200 text-[18px] sm:text-[15px] md:text-[22px] md:mx-auto md:px-8 lg:text-[18px] mx-auto lg:ml-[5px] xl:ml-[150px] mt-[30px] md:mb-4">
            <a
              href="/documents/Faith Nyambura Resume.pdf"
              download="Faith Nyambura Resume.pdf"
              className="text-white hover:text-[#010C04] transition-colors duration-200"
            >
              Download CV
            </a>
          </button>

          {/* Social Links */}
          <div className="social-links flex gap-5 sm:gap-6 md:gap-10 lg:gap-14 justify-center sm:ml-[20px] md:justify-center lg:justify-start xl:ml-[150px] xl:mt-3 xl:justify-start xl:gap-12 mt-8 lg:mt-4">
            <a
              href="https://github.com/FaithNyamburaWamui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#53C218] text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl transition-colors duration-200"
            >
              <TbBrandGithubFilled />
            </a>
            <a
              href="https://www.linkedin.com/in/faith-nyambura-2370872b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#53C218] text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl transition-colors duration-200"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/WamuiFaith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#53C218] text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl transition-colors duration-200"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/4 p-4 sm:p-6 md:p-8 lg:p-16 flex items-center justify-center mt-0 sm:mt-[-5%] md:mt-[-10px] lg:mt-[-10%]">
          <div className="relative w-[90%] aspect-square sm:w-[85%] md:w-[70%] lg:w-[300%] lg:h-[50%] lg:ml-[-200%] xl:w-[200%] xl:h-[60%] xl:ml-[-200px] xl:mt-[20%] mx-auto">
            <Image
              src="/images/faith.jpeg"
              alt="Profile"
              fill
              className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[70px] object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
