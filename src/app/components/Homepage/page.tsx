"use client";

import { useState, useEffect } from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
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
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]); // Add roles.length as a dependency

  return (

    <section id="home">
  <div className="min-h-screen flex flex-wrap w-full inset-0 overflow-hidden">
    <div className="w-full lg:w-3/4 bg-[#010C04] p-8 lg:p-16 flex flex-col justify-center lg:mt-[-16%]">
      <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-white mb-4 font-semibold ml-[10px] lg:ml-[180px] hover:text-[#53C218] xl:ml-[150px]">
        Faith Nyambura
      </h1>

      <p className="text-white mb-7 ml-[10px] lg:ml-[70px] text-[20px] md:text-[25px] lg:text-[30px] hover:text-[#53C218] transition-all duration-500 xl:ml-[150px]">
        I am a <span className="text-[#53C218]">{roles[roleIndex]}</span>
      </p>

      <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed mb-6 text-white w-full lg:w-[80%] ml-[10px] lg:ml-[50px] hover:text-[#53C218] xl:w-[60%] xl:ml-[150px]">
        Faith is a creative person and has always been interested in how
        technology works and integrates with other fields to increase
        productivity. She is passionate about leveraging technology to create
        impactful solutions by designing user-friendly and reliable
        applications that meet user needs. I am skilled in creating responsive
        web applications using React.JS and building apps using Android. I can
        contribute to teams and create technology solutions to solve existing
        problems.
      </p>

      <button className="border-[#53C218] border-2 text-white px-6 lg:px-10 py-2 lg:py-4 rounded-full w-fit hover:bg-[#53C218] transition-colors text-[14px] md:text-[16px] lg:text-[17px] ml-[10px] lg:ml-[70px] mt-[20px] xl:ml-[150px]">
        <a
          href="/documents/Faith Nyambura Resume.pdf"
          download="Faith Nyambura Resume.pdf"
          className="text-white hover:text-[#010C04]"
        >
          Download CV
        </a>
      </button>

      {/* Social Links */}
      <div className="social-links flex gap-6 lg:gap-14 ml-[10px] lg:ml-[70px] mt-10 lg:mt-16 xl:ml-[150px]">
        <a
          href="https://github.com/FaithNyamburaWamui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#53C218] text-3xl lg:text-5xl transition-colors"
        >
          <TbBrandGithubFilled />
        </a>
        <a
          href="https://www.linkedin.com/in/faith-nyambura-2370872b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#53C218] text-3xl lg:text-5xl transition-colors"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://x.com/WamuiFaith"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#53C218] text-3xl lg:text-5xl transition-colors"
        >
          <FaTwitter />
        </a>
      </div>
    </div>

    <div className="w-full lg:w-1/4 bg-[#010C04] p-8 lg:p-16 flex items-center justify-center mt-[-10%] lg:mt-[-10%]  xl:mt-[-17%]">
      <div className="relative w-full h-[160%] md:w-[70%] md:h-[110%] lg:w-[200%] lg:h-[60%] ml-0 lg:ml-[-100%] xl:w-[150%] xl:h-[40%] xl:mr-[100px]">
        <Image
          src="/images/faith.jpeg"
          alt="Profile"
          fill
          className="rounded-[70px] object-cover absolute"
          priority
        />
      </div>
    </div>
  </div>
</section>

    // <section id="home">
    //   <div className="min-h-screen flex w-full inset-0 overflow-hidden">
    //     <div className="w-full bg-[#010C04] p-16 flex flex-col justify-center mt-[-16%]">
    //       <h1 className="text-[50px] text-white mb-7 font-semibold ml-[180px] hover:text-[#53C218]">
    //         Faith Nyambura
    //       </h1>

    //       <p className="text-white mb-7 ml-[180px] text-[30px] hover:text-[#53C218] transition-all duration-500">
    //         I am a <span className="text-[#53C218]">{roles[roleIndex]}</span>
    //       </p>

    //       <p className="text-[18px] leading-relaxed mb-6 text-white w-[50%] ml-[180px] hover:text-[#53C218]">
    //         Faith is a creative person, and has always been interested in how
    //         technology works and integrates with other fields to increase
    //         productivity. She is passionate about leveraging technology to
    //         create impactful solutions by designing user-friendly and reliable
    //         applications that meet user needs. I am skilled in creating
    //         responsive web applications using React.JS and building apps using
    //         Android. I can contribute to teams and create technology solutions
    //         to solve existing problems.
    //       </p>

    //       <button className="border-[#53C218] border-2 text-white px-10 py-4 rounded-full w-fit hover:bg-[#53C218] transition-colors text-[17px] ml-[180px] mt-[20px]">
    //         <a
    //           href="/documents/Faith Nyambura Resume.pdf"
    //           download="Faith Nyambura Resume.pdf"
    //           className="text-white hover:text-[#010C04]"
    //         >
    //           Download CV
    //         </a>
    //       </button>

    //       {/* Social Links */}
    //       <div className="social-links flex gap-14 ml-[190px] mt-16">
    //         <a
    //           href="https://github.com/FaithNyamburaWamui"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-white hover:text-[#53C218] text-5xl transition-colors"
    //         >
    //           <TbBrandGithubFilled />
    //         </a>
    //         <a
    //           href="https://www.linkedin.com/in/faith-nyambura-2370872b5/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-white hover:text-[#53C218] text-5xl transition-colors"
    //         >
    //           <FaLinkedinIn />
    //         </a>
    //         <a
    //           href="https://x.com/WamuiFaith"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-white hover:text-[#53C218] text-5xl transition-colors"
    //         >
    //           <FaTwitter />
    //         </a>
    //       </div>
    //     </div>

    //     <div className="w-1/4 bg-[#010C04] p-16 flex items-center justify-center mt-[-18%]">
    //       <div className="relative w-[200%] h-[45%] ml-[-250%]">
    //         <Image
    //           src="/images/faith.jpeg"
    //           alt="Profile"
    //           fill
    //           className="rounded-[70px] object-cover absolute"
    //           priority
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Homepage;
