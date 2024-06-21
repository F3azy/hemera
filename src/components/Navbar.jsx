import React from "react";
import NavItemList from "./NavItemList";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-[96px] px-40 flex flex-row items-center justify-between">
      <Link to="/">Logo</Link>
      <NavItemList />
    </nav>
  );
};

export default Navbar;
