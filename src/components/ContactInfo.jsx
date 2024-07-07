import React from "react";


function ContactInfo({ value, Icon }) {
  return (
    <div className="bg-dark-200 py-8 px-6 border-b-[1px] border-brand-primary rounded-2xl flex gap-x-6 drop-shadow-xl items-center">
      {Icon && (
        <div className="relative">
          <Icon size={50} className="text-brand-primary" />
          <div className="bg-brand-primary w-5 h-5 blur-xl absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />
        </div>
      )}
      <div className="flex flex-col gap-y-3 text-white-base font-semibold tracking-wider text-xl">
        {value.map((v) => (
          <p>{v}</p>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
