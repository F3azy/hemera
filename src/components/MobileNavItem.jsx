import React from "react";
import { Link } from "react-router-dom";

const MobileNavItem = ({ page, title, borderBool }) => {
    const border = borderBool ? "border-b-[1px]" : "border-b-0"
  return (
      <Link to={page} className={`text-white-base text-lg text-center py-4 px-14 border-brand-primary ${border}`}>
        {title}
      </Link>
  );
};

export default MobileNavItem;
