import React from "react";

const SocialIcon = ({ link, Icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="text-white-base hover:text-brand-primary cursor-pointer"
    >
      {Icon && <Icon size={25} />}
    </a>
  );
};

export default SocialIcon;
