import React from "react";
import quotes from "../../../assets/images/Vector.svg";

const Quotes = () => {
  return (
    <div className="w-full h-[400px] sm:h-[490px] bg-[#2F007A] relative flex justify-center items-center p-[20px] sm:p-[20px] ">
      <section className="max-w-[1440px] container mx-auto">
        <div className="max-w-[1249px] mx-auto h-[200px] sm:h-[252px] border-blue-800 border-[2.5px] p-[10px] gap-[10px] relative">
          <div className="absolute left-10 top-[-18px]">
            <img
              src={quotes}
              alt="quotes"
              className="w-[48px] h-[36px] text-[#FFFFFF]"
            />
          </div>
          <div className="w-full mx-auto h-[120px] flex justify-center items-start">
            <span className="text-[18px] md:text-[30px] text-[#FFFFFF] font-normal  leading-[30px] md:leading-[60px] font-montserrat text-center md:text-start px-5 my-10 md:ml-28 tracking-tight">
              Empowering innovation and fostering collaboration - together, we
              build the future.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quotes;
