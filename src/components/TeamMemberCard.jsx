import React from "react";

const TeamMemberCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-60 h-60 overflow-hidden relative rounded-full">
        <img src={image} alt={name} className="absolute -top-2/3" />
      </div>
      <div className="flex flex-col items-center gap-y-4 py-3">
        <p className="text-white-base font-extrabold tracking-wider text-xl">
          {name}
        </p>
        <p className="text-white-darker font-extrabold tracking-wider text-base text-center">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
