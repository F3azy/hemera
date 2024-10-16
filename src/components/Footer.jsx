import React from "react";
import { HemeraLogo } from "../assets";
import FooterSocialIconList from "./FooterSocialIconList";
import PageTitle from "./PageTitle";
import ContactInfoList from "./ContactInfoList";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer
      className="px-5 xl:px-40 py-5 xl:pb-5 xl:pt-12 mt-20 z-20 
    flex flex-col gap-y-16 
    text-white-base tracking-widest 
    bg-dark-300"
    >
      <div className="h-full flex flex-col justify-center items-center xl:items-start gap-y-10 xl:gap-y-10 relative">
        <PageTitle>ODEZWIJ SIĘ</PageTitle>
        <p className="text-white-base text-xl xl:text-2xl text-center xl:text-left font-medium tracking-wider xl:tracking-wide">
          Twoja wizja, nasza realizacja – skontaktuj się już dziś!
        </p>
      </div>
      <div className="flex flex-col items-center xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-20 gap-y-14 xl:gap-y-0">
        <ContactInfoList />
        <ContactForm />
        <FooterSocialIconList />
      </div>
      <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-y-8 text-sm xl:text-base">
        <img className="w-[100px]" src={HemeraLogo} alt="logo" />
        <p>© COPYRIGHT 2024 HEMERA STUDIOS</p>
        <p>
          WEBSITE BY{" "}
          <a
            className="underline hover:text-brand-primary"
            href="https://www.fcarvelli.com/"
            target="_blank"
          >
            FRANCESCO CARVELLI
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
