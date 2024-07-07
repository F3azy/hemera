import React from "react";
import { HeroBG } from "../assets";
import MobileNavbar from "../components/MobileNavbar";

const Hero = () => {
  return (
    <div className="h-screen xl:h-full -mt-[96px] xl:m-0 flex items-center relative">
      <div className="absolute top-0 -left-5 xl:-left-40 h-full w-screen ">
        <video
          className="object-cover w-screen h-screen xl:w-full absolute xl:fixed xl:top-0 xl:left-0 z-0"
          autoPlay
          muted
          loop
        >
          <source src={HeroBG} type="video/mp4" />
        </video>
        <div className="absolute left-0 right-0 -top-24 bottom-0 xl:-bottom-14 bg-black opacity-50 z-10" />
      </div>
      <div className="z-30 flex flex-col items-center mt-5 xl:m5-0 gap-y-5">
        <div className="xl:hidden w-full h-[1px] border-t-[1px] border-brand-primary" />
        <div className=" xl:w-5/6 text-center text-2xl/normal xl:text-7xl/normal font-bold">
          <h2 className="text-white-base">
            Od pomysłu do gotowego wideo, wszystko w jednym miejscu.
          </h2>
          <h2 className="text-brand-primary">Ożywiamy Twoje wizje.</h2>
        </div>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Hero;
