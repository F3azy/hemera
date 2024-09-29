import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Team from "../sections/Team";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-20 xl:gap-y-44">
      <Hero />
      <About />
      <Team />
    </div>
  );
};

export default Home;
