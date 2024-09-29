import React from "react";

function ContactInfo({ value, Icon }) {
  return (
    <div className=" bg-dark-base py-8 px-6 border-b-[1px] border-brand-primary rounded-2xl flex flex-col gap-y-6 justify-center items-center">
      {Icon && (
        <div className="relative">
          <Icon size={50} className="text-brand-primary" />
          <div className="bg-brand-primary w-5 h-5 blur-xl absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />
        </div>
      )}
      <div className="w-full text-center text-white-base font-semibold tracking-wider">
        {value}
      </div>
    </div>
  );
}

export default ContactInfo;
