import React from "react";
import about_hero from "../../../assets/images/about-hero.png";

const Hero = () => {
  // take path name from url

  return (
    <div
      className="text-white w-full bg-black flex flex-col px-5 sm:px-10 md:px-20 font-montserrat"
      style={{
        left: "calc(50% - 1440px/2)",
        top: "0px",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url(${about_hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="flex mt-5 text-sm gap-5">
        <p>Home</p>
        <p>/</p>
        <p>About</p>
      </span>

      <h1 className="text-center font-bold text-[32px] sm:text-[60px] max-w-[600px] self-center mt-20 mb-32">
        Grow Better With Teck Tick
      </h1>
    </div>
  );
};

export default Hero;
