import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ page, title }) => {
  const { pathname } = useLocation();
  return (
    <div className="relative">
      <Link to={page} className="text-white-base text-lg">
        {title}
      </Link>
      {pathname == page && (
        <div className="absolute w-6 h-[3px] bg-brand-primary" />
      )}
    </div>
  );
};

export default NavItem;
