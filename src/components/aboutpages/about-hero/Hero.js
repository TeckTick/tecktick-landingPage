import React from "react";
import about_hero from "../../../assets/images/about-hero.svg";
import { GoChevronRight } from "react-icons/go";

const Hero = () => {
  return (
    <div
      className="text-white w-full flex flex-col px-5 sm:px-10 md:px-20 font-montserrat "
      style={{
        left: "calc(50% - 1440px/2)",
        top: "0px",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url(${about_hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <span className="flex text-sm gap-1 items-center justify-start mt-5">
        <p>Home</p>
        <p>
          <GoChevronRight />
        </p>
        <p>About us</p>
      </span>

      <h1 className="text-center font-bold text-[24px] sm:text-[32px] md:text-[55px] lg:text-[60px] max-w-[600px] self-center mt-20 mb-32">
        Grow Better With TeckTick
      </h1>
    </div>
  );
};

export default Hero;
