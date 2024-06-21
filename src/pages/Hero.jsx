import React from "react";
import { HeroBG } from "../assets";

const Hero = () => {
  return (
    <div className="h-full flex justify-center items-center">
      Hero
      <video
        className="object-cover h-screen w-screen fixed top-0 left-0 z-0"
        autoPlay
        muted
        loop
      >
        <source src={HeroBG} type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-black opacity-50 z-10" />
      <div className="relative z-30 w-4/6 text-center">
        <h2 className="text-white-base text-[80px] font-bold">Lorem Ipsum is simply dummy text of the printing and</h2>
        <h2 className="text-brand-primary text-[80px] font-bold">typesetting industry.</h2>
      </div>
    </div>
  );
};

export default Hero;
