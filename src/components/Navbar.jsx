import React from "react";
import NavItemList from "./NavItemList";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[96px] px-40 flex flex-row items-center justify-between">
      Logo
      <NavItemList />
    </div>
  );
};

export default Navbar;
