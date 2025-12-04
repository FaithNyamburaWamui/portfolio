"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full xl:py-0 lg:py-1 sm:py-2 md:py-3 bg-[#010C04] top-0 z-10">
      <div className="w-full flex items-center justify-between px-2 sm:px-4 md:px-6 lg:max-w-7xl lg:mx-auto">
        {/* Logo - Responsive sizing */}
        <div className="flex-shrink-0">
          <Image
            src="/images/logos.png"
            alt="Logo"
            width={120}
            height={24}
            className="transform rotate-12 ml-[-15px] sm:ml-[-20px] md:ml-[-30px] w-24 h-auto sm:w-44 md:w-52 lg:w-56 xl:w-52"
          />
        </div>

        {/* Desktop Navigation Links - Only visible on large screens and above */}
        <div className="hidden lg:flex xl:gap-40 lg:gap-20">
          <a
            href="#home"
            className="text-white hover:text-[#53C218] text-base lg:text-lg xl:text-[20px] hover:font-medium transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-white hover:text-[#53C218] text-base lg:text-lg xl:text-[20px] hover:font-medium transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#stacks"
            className="text-white hover:text-[#53C218] text-base lg:text-lg xl:text-[20px] hover:font-medium transition-colors duration-200"
          >
            Stacks
          </a>
          <a
            href="#project"
            className="text-white hover:text-[#53C218] text-base lg:text-lg xl:text-[20px] hover:font-medium transition-colors duration-200"
          >
            Project
          </a>
          <a
            href="#contact"
            className="text-white hover:text-[#53C218] text-base lg:text-lg xl:text-[20px] hover:font-medium transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Hamburger Icon for Mobile and Small Tablets */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-2xl sm:text-3xl focus:outline-none mr-2 sm:mr-4 hover:text-[#53C218] transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu - Enhanced responsive design */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#010C04] bg-opacity-95 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-2xl sm:text-3xl hover:text-[#53C218] transition-colors duration-200"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <AiOutlineClose />
          </button>
          
          <ul className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
            <li>
              <a
                href="#home"
                className="text-white text-lg sm:text-xl md:text-2xl hover:text-[#53C218] transition-colors duration-200 hover:scale-105 transform"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white text-lg sm:text-xl md:text-2xl hover:text-[#53C218] transition-colors duration-200 hover:scale-105 transform"
                onClick={closeMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#stacks"
                className="text-white text-lg sm:text-xl md:text-2xl hover:text-[#53C218] transition-colors duration-200 hover:scale-105 transform"
                onClick={closeMenu}
              >
                Stacks
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="text-white text-lg sm:text-xl md:text-2xl hover:text-[#53C218] transition-colors duration-200 hover:scale-105 transform"
                onClick={closeMenu}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-lg sm:text-xl md:text-2xl hover:text-[#53C218] transition-colors duration-200 hover:scale-105 transform"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
