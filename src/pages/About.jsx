import React from "react";
import PageTitle from "../components/PageTitle";
import ServiceCardList from "../components/ServiceCardList";

const About = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-y-5 xl:gap-y-12 relative">
      <div className="bg-brand-primary w-1/2 h-3/4 rounded-full opacity-10 blur-[190px] absolute -right-1/2 -bottom-1/3 xl:-right-72 xl:-bottom-52 z-0" />
      <div className="bg-brand-primary w-1/4 h-1/4 rounded-full opacity-15 blur-[150px] absolute left-0 xl:left-22 top-52 z-0" />
      <PageTitle>KIM JESTEŚMY</PageTitle>

      <p className="w-2/3 text-white-base text-xl xl:text-2xl text-center font-medium tracking-wider xl:tracking-wide z-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <ServiceCardList />
    </div>
  );
};

export default About;
