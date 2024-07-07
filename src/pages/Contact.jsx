import React from "react";
import PageTitle from "../components/PageTitle";
import ContactInfoList from "../components/ContactInfoList";

const Contact = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-y-10 xl:gap-y-12 relative">
      <PageTitle>ODEZWIJ SIĘ</PageTitle>
      <p className="text-white-base text-xl xl:text-2xl font-medium tracking-wider xl:tracking-wide">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <ContactInfoList />
    </div>
  );
};

export default Contact;
