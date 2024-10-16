import React from "react";
import { contactInfo } from "../const/contact";
import ContactInfo from "./ContactInfo";

const ContactInfoList = () => {
  return (
    <div className="flex flex-col xl:items-start gap-y-8">
      {contactInfo.map((contact) => (
        <ContactInfo key={contact.name} value={contact.value} Icon={contact.icon} />
      ))}
    </div>
  );
};

export default ContactInfoList;
