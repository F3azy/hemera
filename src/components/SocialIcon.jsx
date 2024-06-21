import React from "react";

const SocialIcon = ({ icon }) => {
  return (
    <a href={icon.link} target="_blank" className="text-white-base hover:text-brand-primary cursor-pointer">
      <icon.icon size={25} />
    </a>
  );
};

export default SocialIcon;
