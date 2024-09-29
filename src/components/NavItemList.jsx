import React from "react";
import { navItems } from "../const/navItems";
import NavItem from "./NavItem";

const NavItemList = () => {
  return (
    <div className="flex flex-row gap-x-5 xl:gap-x-11">
      {navItems.map((navItem) => (
        <NavItem key={navItem.id} page={navItem.page} title={navItem.title} />
      ))}
    </div>
  );
};

export default NavItemList;
