import { LogoDark } from "../assets";
import { HeroVideo } from "../components";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src={LogoDark}
        alt="Hemera Logo Dark"
        className="absolute -translate-x-1/2 left-1/2 top-10"
      />
      <div className="absolute flex flex-col text-5xl font-bold uppercase gap-y-3 top-10 right-14 text-brand">
        <p>capture</p>
        <p>create</p>
        <p>captivate</p>
      </div>
      <div className="w-full h-1/2 bg-[#f9f9f9]" />
      <HeroVideo />
    </div>
  );
};

export default Hero;
