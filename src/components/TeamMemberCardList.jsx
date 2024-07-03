import React from "react";
import { team } from "../const/teamMembers";
import TeamMemberCard from "./TeamMemberCard";

const TeamMemberCardList = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-y-5">
      {team.map((member) => (
        <TeamMemberCard
          key={member.name}
          image={member.image}
          name={member.name}
          role={member.role}
        />
      ))}
    </div>
  );
};

export default TeamMemberCardList;
