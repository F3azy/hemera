import React from "react";
import { socialIcons } from "../const/socialIcons";
import FooterSocialIcon from "./FooterSocialIcon";

const FooterSocialIconList = () => {
  return (
    <div className="flex xl:flex-col gap-x-14 xl:gap-y-8">
      {socialIcons.map((icon) => (
        <FooterSocialIcon key={icon.name} link={icon.link} Icon={icon.icon} name={icon.name} />
      ))}
    </div>
  );
};

export default FooterSocialIconList;
