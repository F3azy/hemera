import React from "react";
import SocialIcon from "./SocialIcon";
import { socialIcons } from "../const/socialIcons";

const SocialIconList = () => {
  return (
    <div className="fixed z-30 right-0 hidden xl:flex flex-col px-3 gap-y-16 top-1/2 -translate-y-1/2">
      {socialIcons.map((icon) => (
        <SocialIcon key={icon.name} icon={icon} />
      ))}
    </div>
  );
};

export default SocialIconList;
