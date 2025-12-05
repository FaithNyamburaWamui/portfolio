"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, MapPin, LucideIcon } from "lucide-react";

// Contact Info Components
interface InfoItemProps {
  Icon: LucideIcon;
  label: string;
  value: string;
}

const InfoItem = ({ Icon, label, value }: InfoItemProps) => (
  <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
    <Icon className="text-[#53C218] w-8 h-8 sm:w-10 sm:h-10 md:w-[45px] md:h-[45px] flex-shrink-0" />
    <div>
      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#53C218]">
        {label}
      </h3>
      <p className="text-white text-[15px] sm:text-[17px] md:text-[19px] break-words">
        {value}
      </p>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div className="rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
      <h2 className="mb-6 sm:mb-7 md:mb-8 text-[24px] xl:text-[28px] sm:text-[27px] md:text-[30px] font-semibold text-[#53C218]">
        Contact Information
      </h2>
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
        <InfoItem
          Icon={Mail}
          label="Email"
          value="faithnyamburawamui@gmail.com"
        />
        <InfoItem Icon={MapPin} label="Location" value="Nairobi, Kenya" />
      </div>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_3211i1j",
        "template_rurq1h9",
        templateParams,
        "wnMuehn-FK2NF2hcu"
      );
      setStatus({ submitting: false, success: true, error: false });
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (error) {
      setStatus({ submitting: false, success: false, error: true });
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending message:", error);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 w-full">
      <h2 className="mb-6 sm:mb-8 md:mb-10 text-[24px] xl:text-[28px] sm:text-[27px] md:text-[30px] font-semibold text-[#53C218]">
        Contact Form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 sm:gap-8 md:gap-5 lg:gap-6 xl:gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 sm:p-4 md:p-5 lg:p-4 xl:p-4 bg-transparent border border-green-800 rounded-lg text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl text-white 
                             placeholder:text-white-100 placeholder:text-sm sm:placeholder:text-base md:placeholder:text-[16px] lg:placeholder:text-[18px] xl:placeholder:text-[18px] focus:outline-none focus:border-green-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 sm:p-4 md:p-5 lg:p-4 xl:p-4 bg-transparent border border-green-800 rounded-lg text-white text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[18px] 
                             placeholder:text-white-100 placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg lg:placeholder:text-[18px] xl:placeholder:text-[18px] focus:outline-none focus:border-green-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full p-2 sm:p-3 md:p-3 lg:p-4 xl:p-2 bg-transparent border border-green-800 rounded-lg text-white text-base sm:text-lg md:text-xl lg:text-[18px] xl:text-[18px] resize-none min-h-[150px]
                             placeholder:text-white-100 placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg lg:placeholder:text-[18px] xl:placeholder:text-[18px] focus:outline-none focus:border-green-500"
          required
        />

        <button
          type="submit"
          disabled={status.submitting || !isFormValid}
          className="flex items-center justify-center gap-2 self-end bg-green-500 font-medium text-white border-2 border-transparent
                             px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 xl:py-2 rounded-lg cursor-pointer transition-all duration-200 text-[16px] sm:text-[18px] md:text-[20px]
                             hover:bg-[#53C218] hover:text-white hover:border-[#53C218] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status.submitting ? "Sending..." : "Send Message"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="stroke-current"
          >
            <path
              d="M15.5 8L8.5 15M15.5 8L8.5 1M15.5 8H0.5"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

// Main Contact Section - THIS REPLACES YOUR CONTACT PAGE
export default function Contact() {
  return (
    <section id="contact" className="bg-[#010C04]">
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-6 md:gap-6 p-4 sm:p-6 md:p-8 xl:mt-[-16px] mt-[-5px] max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2">
          <ContactInfo />
        </div>
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
