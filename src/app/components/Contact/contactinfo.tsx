"use client";
import React from "react";
import { Mail, MapPin, LucideIcon } from "lucide-react";

interface InfoItemProps {
  Icon: LucideIcon;
  label: string;
  value: string;
}

const InfoItem = ({ Icon, label, value }: InfoItemProps) => (
  <div className="flex items-center gap-10 mb-16 ml-[20%]">
    <Icon size={45} className="text-[#53C218]" />
    <div>
      <h3 className="text-[20px] font-semibold text-[#53C218]">{label}</h3>
      <p className="text-white text-[19px]">{value}</p>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div className="rounded-2xl p-16">
      <h2 className="mb-8 text-[30px] font-semibold text-[#53C218] ml-[20%]">
        Contact Information
      </h2>
      <div className="mt-16">
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

export default ContactInfo;
