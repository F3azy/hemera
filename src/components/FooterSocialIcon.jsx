import React from "react";

const FooterSocialIcon = ({ link, Icon, name }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="w-min text-white-base hover:text-brand-primary cursor-pointer flex gap-x-3"
    >
      {Icon && <Icon size={25} />}
      <p className="hidden xl:block">{name}</p>
    </a>
  );
};

export default FooterSocialIcon;
