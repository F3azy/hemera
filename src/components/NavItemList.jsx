import React from "react";
import { navItems } from "../const/navItems";
import NavItem from "./NavItem";

const NavItemList = () => {
  return (
    <div className="flex flex-row gap-x-11">
      {navItems.map((navItem) => (
        <NavItem key={navItem.id} item={navItem} />
      ))}
    </div>
  );
};

export default NavItemList;
