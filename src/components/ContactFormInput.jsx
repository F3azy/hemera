import React from "react";

const ContactFormInput = (props) => {
  return (
    <input
      className="w-full 
      py-1
      bg-transparent 
      border-b-2 
      border-brand-primary 
      outline-none 
      placeholder:text-white-darker
      placeholder:px-1
      "
      {...props}
    />
  );
};

export default ContactFormInput;
