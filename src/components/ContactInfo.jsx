import React from "react";

function ContactInfo({ value, Icon }) {
  return (
    <div className="flex gap-x-3 justify-center items-center">
      {Icon && <Icon size={30} className="text-brand-primary" />}
      <div className="text-center text-white-base font-semibold tracking-wider">
        {value}
      </div>
    </div>
  );
}

export default ContactInfo;
