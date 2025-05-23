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
    <nav className="p-4 bg-[#010C04] top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/images/logos.png"
          alt="Logo"
          width={200}
          height={40}
          className="transform rotate-12 ml-[-30px]"
        />

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-40">
          <a
            href="#home"
            className="text-white hover:text-[#53C218] text-[20px] hover:font-medium"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-white hover:text-[#53C218] text-[20px] hover:font-medium"
          >
            Services
          </a>
          <a
            href="#stacks"
            className="text-white hover:text-[#53C218] text-[20px] hover:font-medium"
          >
            Stacks
          </a>
          <a
            href="#project"
            className="text-white hover:text-[#53C218] text-[20px] hover:font-medium"
          >
            Project
          </a>
          <a
            href="#contact"
            className="text-white hover:text-[#53C218] text-[20px] hover:font-medium"
          >
            Contact
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-[33px] focus:outline-none mr-[30px]"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#010C04] bg-opacity-95 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeMenu}
          >
            <AiOutlineClose />
          </button>
          <ul className="flex flex-col items-center gap-6">
            <li>
              <a
                href="#home"
                className="text-white text-[20px] hover:text-[#53C218]"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white text-[20px] hover:text-[#53C218]"
                onClick={closeMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#stacks"
                className="text-white text-[20px] hover:text-[#53C218]"
                onClick={closeMenu}
              >
                Stacks
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="text-white text-[20px] hover:text-[#53C218]"
                onClick={closeMenu}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-[20px] hover:text-[#53C218]"
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
