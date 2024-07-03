import React from "react";

const ServiceCard = ({ name, description, Icon }) => {
  return (
    <div className="flex flex-col">
      {Icon && (
        <div className="relative">
          <Icon size={50} className="text-brand-primary" />
          <div className="bg-brand-primary w-5 h-5 blur-xl absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />
        </div>
      )}
      <div className="flex flex-col gap-y-2">
        <p className="text-white-base">{name}</p>
        <p className="text-white-darker">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
