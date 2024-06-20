import React from "react";

const NavItem = ({ item }) => {
  const active = "";
  return (
    <div className="relative">
      <div className="text-white-base text-lg">{item.title}</div>
      {active == item.id && (
        <div className="absolute w-6 h-[3px] bg-brand-primary" />
      )}
    </div>
  );
};

export default NavItem;
