import React from "react";
import { contactInfo } from "../const/contact";
import ContactInfo from "./ContactInfo";

const ContactInfoList = () => {
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-3 gap-10">
      {contactInfo.map((contact) => (
        <ContactInfo key={contact.name} value={contact.value} Icon={contact.icon} />
      ))}
    </div>
  );
};

export default ContactInfoList;
