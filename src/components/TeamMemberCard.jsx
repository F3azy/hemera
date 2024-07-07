import React from "react";

const TeamMemberCard = ({ image, name, role, bgColor }) => {
  return (
    <div className="flex flex-col">
      {/* <div className={`w-80 h-80 relative ${bgColor}`}>
        <img src={image} alt={name} className="absolute bottom-0 left-1/2 -translate-x-1/2" />
      </div> */}
      <div className={`xl:w-80 h-80 rounded-2xl drop-shadow-xl relative overflow-hidden ${bgColor}`}>
        <img src={image} alt={name} className="w-full absolute -bottom-1/3 left-0" />
      </div>
      <div className="flex flex-col gap-y-4 py-3">
        <p className="text-white-base font-bold tracking-wider text-2xl">
          {name}
        </p>
        <p className="text-white-darker font-extralight tracking-widest text-lg">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
