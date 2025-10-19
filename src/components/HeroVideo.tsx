import { HeroBG } from "../assets";

const HeroVideo = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full clip-hero-border" />
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 object-cover w-full h-full clip-hero"
      >
        <source src={HeroBG} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroVideo;
