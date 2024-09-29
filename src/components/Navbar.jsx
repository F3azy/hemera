import React from "react";
import NavItemList from "./NavItemList";
import { Link } from "react-router-dom";
import { HemeraLogo } from "../assets";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const backGround =
    scrollPosition > 0
      ? "bg-dark-base bg-opacity-60 backdrop-blur-md border-b-[1px] border-brand-primary/20"
      : "bg-transparent";


  return (
    <nav className={`fixed z-[9999] w-full py-3 xl:py-0 xl:h-[96px] px-5 xl:px-40 flex flex-row items-center justify-between ${backGround} transition-[background]`}>
      <Link to="/">
        <img className="w-[85px] xl:w-[100px]" src={HemeraLogo} alt="logo" />
      </Link>
      {/* <NavItemList /> */}
    </nav>
  );
};

export default Navbar;
