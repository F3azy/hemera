import React from "react";
import SocialIcon from "./SocialIcon";
import { socialIcons } from "../const/socialIcons";

const FooterSocialIconList = () => {
  return (
    <div className="flex gap-x-12">
      {socialIcons.map((icon) => (
        <SocialIcon key={icon.name} icon={icon} />
      ))}
    </div>
  );
};

export default FooterSocialIconList;
