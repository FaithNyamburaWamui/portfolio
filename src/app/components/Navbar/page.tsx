import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="p-4 bg-[#010C04] top-0  z-10">
      <div className="container mx-auto flex items-center">
        {/* Logo */}
          <Image
            src="/images/logos.png"
            alt="Logo"
            width={200}
            height={40}
            className="transform rotate-12 ml-[-70px]"
          />

        {/* Navigation Links */}
        <div className="flex gap-40 mt-[-40px] ml-[40%]">
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
      </div>
    </nav>
  );
};

export default Navbar;
