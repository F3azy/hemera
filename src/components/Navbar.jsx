import React from "react";
import NavItemList from "./NavItemList";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-[96px] px-40 flex flex-row items-center justify-between">
      Logo
      <NavItemList />
    </nav>
  );
};

export default Navbar;
