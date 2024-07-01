import React from "react";
import NavItemList from "./NavItemList";
import { Link } from "react-router-dom";
import { HemeraLogo } from "../assets";

const Navbar = () => {
  return (
    <nav className="fixed z-30 w-full h-[96px] px-5 xl:px-40 flex flex-row items-center justify-between">
      <Link to="/">
        <img className="w-[100px]" src={HemeraLogo} alt="logo" />
      </Link>
      <NavItemList />
    </nav>
  );
};

export default Navbar;
