// "use client";
// import React from "react";
// import { Mail, Phone, Calendar, MapPin, LucideIcon } from "lucide-react";

// interface InfoItemProps {
//   Icon: LucideIcon;
//   label: string;
//   value: string;
// }

// const InfoItem = ({ Icon, label, value }: InfoItemProps) => (
//   <div className="flex items-center gap-10 mb-16 ml-[20%]">
//     <Icon size={45} className="text-[#53C218]" />
//     <div>
//       <h3 className="text-[20px] font-semibold text-[#53C218]">{label}</h3>
//       <p className="text-white text-[19px]">{value}</p>
//     </div>
//   </div>
// );

// const ContactInfo = () => {
//   return (
//     <div className="rounded-2xl p-16">
//       <h2 className="mb-8 text-[30px] font-semibold text-[#53C218] ml-[20%]">
//         Contact Information
//       </h2>
//       <InfoItem
//         Icon={Mail}
//         label="Email"
//         value="faithnyamburawamui@gmail.com"
//       />
//       <InfoItem Icon={Phone} label="Phone" value="+254 757 047 583" />
//       <InfoItem Icon={Calendar} label="DOB" value="12th December 2004" />
//       <InfoItem Icon={MapPin} label="Location" value="Nairobi, Kenya" />
//     </div>
//   );
// };

// export default ContactInfo;

"use client";
import React from "react";
import { Mail, Phone, Calendar, MapPin, LucideIcon } from "lucide-react";

interface InfoItemProps {
  Icon: LucideIcon;
  label: string;
  value: string;
}

const InfoItem = ({ Icon, label, value }: InfoItemProps) => (
  <div className="flex items-center gap-10 mb-16 ml-[10%] md:ml-[15%] lg:ml-[20%]">
    <Icon size={45} className="text-[#53C218]" />
    <div>
      <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-semibold text-[#53C218]">
        {label}
      </h3>
      <p className="text-white text-[17px] md:text-[18px] lg:text-[19px]">
        {value}
      </p>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div className="rounded-2xl p-8 md:p-12 lg:p-16">
      <h2 className="mb-8 text-[25px] md:text-[30px] lg:text-[35px] font-semibold text-[#53C218] ml-[10%] md:ml-[15%] lg:ml-[20%]">
        Contact Information
      </h2>
      <InfoItem
        Icon={Mail}
        label="Email"
        value="faithnyamburawamui@gmail.com"
      />
      <InfoItem Icon={Phone} label="Phone" value="+254 757 047 583" />
      <InfoItem Icon={MapPin} label="Location" value="Nairobi, Kenya" />
    </div>
  );
};

export default ContactInfo;

