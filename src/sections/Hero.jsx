import React from "react";
import { HeroBG } from "../assets";

const Hero = () => {
  return (
    <div className="h-screen -mt-[96px] flex items-center relative">
      <div className="absolute top-0 -left-5 xl:-left-40 h-full w-screen">
        <video
          className="object-cover w-screen h-screen xl:w-full absolute xl:top-0 xl:left-0 z-0"
          autoPlay
          muted
          loop
        >
          <source src={HeroBG} type="video/mp4" />
        </video>
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50 z-10" />
      </div>
      <div className="z-30 flex flex-col items-center gap-y-5">
        <div className=" xl:w-5/6 text-center text-2xl/normal xl:text-7xl/normal font-bold">
          <h2 className="text-white-base">
            Od pomysłu do gotowego wideo, wszystko w jednym miejscu.
          </h2>
          <h2 className="text-brand-primary">Ożywiamy Twoje wizje.</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
