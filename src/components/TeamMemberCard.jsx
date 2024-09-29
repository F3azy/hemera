import React from "react";

const TeamMemberCard = ({ image, name, role, position }) => {
  return (
    <div className="flex flex-col">
      <div className={`xl:w-80 h-80 rounded-2xl drop-shadow-xl relative overflow-hidden`}>
        <img src={image} alt={name} className={`w-full absolute ${position}`} />
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
