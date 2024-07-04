import React from "react";

const ServiceCard = ({ name, description, Icon }) => {
  return (
    <div className="bg-dark-200 py-8 px-6 border-b-[1px] border-brand-primary rounded-2xl flex flex-col gap-y-6 drop-shadow-xl">
      {Icon && (
        <div className="relative">
          <Icon size={50} className="text-brand-primary" />
          <div className="bg-brand-primary w-5 h-5 blur-xl absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />
        </div>
      )}
      <div className="flex flex-col gap-y-3">
        <p className="text-white-base font-bold tracking-wider text-2xl">
          {name}
        </p>
        <p className="text-white-darker tracking-wide text-xl xl:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
