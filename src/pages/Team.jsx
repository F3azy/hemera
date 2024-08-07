import React from "react";
import PageTitle from "../components/PageTitle";
import TeamMemberCardList from "../components/TeamMemberCardList";

const Team = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-y-10 xl:gap-y-12 relative">
      <PageTitle>POZNAJ NASZ ZESPÓŁ</PageTitle>
      <TeamMemberCardList />
    </div>
  );
};

export default Team;
