import { HeroBG } from "../assets";

const Hero = () => {
  return (
    <div className="">
      <div className="clip-path">
        <video autoPlay muted loop>
          <source src={HeroBG} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
