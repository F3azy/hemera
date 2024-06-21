import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ item }) => {
  const { pathname } = useLocation();
  return (
    <div className="relative">
      <Link to={item.page} className="text-white-base text-lg">
        {item.title}
      </Link>
      {pathname == item.page && (
        <div className="absolute w-6 h-[3px] bg-brand-primary" />
      )}
    </div>
  );
};

export default NavItem;
