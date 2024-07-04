import React from "react";
import { mobileNavItems } from "../const/navItems";
import MobileNavItem from "./MobileNavItem";

const MobileNavItemList = () => {
  return (
    <div className="flex flex-col border-[1px] border-brand-primary rounded-lg">
      {mobileNavItems.map((navItem, idx, arr) => (
          <MobileNavItem key={navItem.id} page={navItem.page} title={navItem.title} borderBool={idx!==arr.length-1} />
      ))}
    </div>
  );
};

export default MobileNavItemList;
