import React from "react";
import { HemeraLogo } from "../assets";
import FooterSocialIconList from "./FooterSocialIconList";

const Footer = () => {
  return (
    <div
      className="px-5 xl:px-40 py-6 xl:py-4 z-20 
    flex flex-col gap-y-8 
    text-white-base tracking-widest"
    >
      <div className="flex flex-col xl:hidden items-center gap-y-8 font-semibold">
        <img className="w-[100px]" src={HemeraLogo} alt="logo" />
        <FooterSocialIconList />
        {/* <p>ul. Przykladowa 12, 70-000 Szczecin</p> */}
        <div>
          <p>+48 501 463 348</p>
          <p>+48 505 147 470</p>
        </div>
        <p>kontakt@hemerastudios.pl</p>
      </div>
      <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-y-2 text-sm xl:text-base">
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
    </div>
  );
};

export default Footer;
