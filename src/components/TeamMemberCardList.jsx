import React from "react";
import { team } from "../const/teamMembers";
import TeamMemberCard from "./TeamMemberCard";

const TeamMemberCardList = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-10 xl:grid-cols-[repeat(3,_320px)] xl:justify-evenly xl:gap-0">
      {team.map((member) => (
        <TeamMemberCard
          key={member.name}
          image={member.image}
          name={member.name}
          role={member.role}
          position={member.position}
        />
      ))}
    </div>
  );
};

export default TeamMemberCardList;
