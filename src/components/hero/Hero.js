import React from "react";
import hero from "../../assets/images/hero.svg";

const Hero = () => {
  return (
    <header className="bg-[#2F007A] text-white pt-10 pb-20 px-5 font-montserrat ">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center mx-auto w-full gap-8 ">
        <div className="flex flex-col lg:max-w-[600px] w-full gap-6 justify-center items-start lg:mt-10">
          <h1 className="font-bold text-[32px] md:text-[55px] lg:text-[64px]">
            Teamwork Makes the Dream Work
          </h1>
          <p className="text-xl">
            Tell the world how awesome your site is and why they should use it!!
            Tell the world how awesome your site is and why they should use it!!
          </p>
          <span className="flex flex-col gap-2.5 sm:flex-row mt-3 ">
            <button className="bg-[#95C6E4] font-semibold text-[#450099] rounded-[15px] w-[90vw] h-[44px] sm:w-[213px] sm:h-[64px] mx-auto sm:mx-0">
              Get Started
            </button>
            <button className="text-[#95C6E4] font-semibold border-[#95c6e4] rounded-[15px] w-[90vw] h-[44px] sm:w-[213px] sm:h-[64px] border mx-auto sm:mx-0">
              Explore Community
            </button>
          </span>
        </div>
        <div className="block items-center justify-center h-full w-full overflow-hidden rounded-[10px] max-h-[311px] lg:max-w-[611px] lg:max-h-[345px] mt-10 lg:mt-0">
          <img
            src={hero}
            alt="teck tick home page"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
