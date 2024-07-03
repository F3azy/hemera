import React from "react";
import { team } from "../const/teamMembers";
import TeamMemberCard from "./TeamMemberCard";

const TeamMemberCardList = () => {
  return (
    <div className="w-full grid xl:grid-cols-[repeat(3,_256px)] justify-around">
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
