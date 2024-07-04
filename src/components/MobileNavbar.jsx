import React from "react";
import MobileNavItemList from "./MobileNavItemList";

const MobileNavbar = () => {
  return (
    <div className="xl:hidden w-full flex flex-col items-center gap-0">
      <div className="w-full h-[1px] border-t-[1px] border-brand-primary" />
      <div className="w-[1px] border-l-[1px] border-brand-primary h-8" />
      <MobileNavItemList />
    </div>
  );
};

export default MobileNavbar;
