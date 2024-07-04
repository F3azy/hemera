import React from "react";
import { team } from "../const/teamMembers";
import TeamMemberCard from "./TeamMemberCard";

const TeamMemberCardList = () => {
  return (
    <div className="w-full grid xl:grid-cols-[repeat(3,_320px)] justify-around">
      {team.map((member) => (
        <TeamMemberCard
          key={member.name}
          image={member.image}
          name={member.name}
          role={member.role}
          bgColor={member.bgColor}
        />
      ))}
    </div>
  );
};

export default TeamMemberCardList;
