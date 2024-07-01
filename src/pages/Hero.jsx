import React from "react";
import { HeroBG } from "../assets";

const Hero = () => {
  return (
    <div className="h-screen xl:h-full flex flex-col xl:flex-row justify-center items-center relative">
      <div className="absolute top-0 -left-5 xl:-left-40 h-full w-screen ">
        <video
          className="object-cover w-screen h-screen xl:w-full absolute xl:fixed xl:top-0 xl:left-0 z-0"
          autoPlay
          muted
          loop
        >
          <source src={HeroBG} type="video/mp4" />
        </video>
      </div>
      <div className="fixed inset-0 bg-black opacity-50 z-10" />
      <div className="relative z-30 xl:w-5/6 text-center text-[32px] xl:text-[80px] font-bold">
        <h2 className="text-white-base">
          Od pomysłu do gotowego wideo, wszystko w jednym miejscu.
        </h2>
        <h2 className="text-brand-primary">Ożywiamy Twoje wizje.</h2>
      </div>
    </div>
  );
};

export default Hero;
