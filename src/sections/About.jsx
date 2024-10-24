import React from "react";
import PageTitle from "../components/PageTitle";
import ServiceCardList from "../components/ServiceCardList";

const About = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-y-10 xl:gap-y-12 relative">
      <div className="bg-brand-primary w-1/2 h-[200px] rounded-full opacity-10 blur-[190px] absolute -right-1/2 bottom-[-50px] xl:-right-72 xl:-bottom-52 z-0" />
      <div className="bg-brand-primary w-1/4 h-1/4 rounded-full opacity-15 blur-[150px] absolute left-0 xl:left-22 top-52 z-0" />
      <PageTitle>KIM JESTEŚMY</PageTitle>

      <p className="xl:w-2/3 text-white-base text-xl xl:text-2xl text-center font-medium tracking-wider xl:tracking-wide z-10">
        Jesteśmy zespołem fachowców w produkcji wideo, tworzących angażujące
        i inspirujące materiały. Łączymy profesjonalizm z kreatywnością,
        przekształcając Twoje pomysły w dynamiczne obrazy. Oferujemy filmy
        promocyjne, relacje z wydarzeń i reklamy, dostosowane do Twoich potrzeb.
      </p>

      <ServiceCardList />
    </div>
  );
};

export default About;
