import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import featured1 from "../../../assets/images/featured1.png";
import "./featured.css";
const Featured = () => {
  return (
    <div className="bg-white px-5 lg:px-14 py-10">
      <h1 className="font-montserrat font-medium text-[24px] sm:text-[32px] md:text-[36px] text-[#5C5C77]">
        Featured Articles
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto items-center mt-10 gap-6 ">
        <div className="max-w-[605px] max-h-[705px] h-full bg-white  custom-shadow w-full flex flex-col gap-6 p-3  rounded-[18px] mx-auto pb-14">
          <div className="w-full max-w-[575px] max-h-[391px] overflow-hidden h-full rounded-[23px]">
            <img
              src={featured1}
              alt="featured1"
              className="h-full w-full object-cover rounded-[23px]"
            />
          </div>
          <div className="flex gap-6 items-center text-base">
            <span className="text-[#171717] font-inter font-medium bg-[#D9D9D9] rounded-[18px] px-[5px] text-lg">
              Category
            </span>
            <p className="font-montserrat text-[#13131399]">8min read</p>
          </div>
          <h1 className="font-inter text-[#171717] font-semibold text-[20px] sm:text-[32px] lg:text-[36px] max-w-[570px]">
            Article name- headline for article
          </h1>
          <button className="flex gap-5 font-montserrat font-semibold text-[#450099] text-xl items-center">
            <p>Read Now</p>
            <FaLongArrowAltRight />
          </button>
        </div>

        <div className="flex flex-col max-w-[605px] w-full justify-between gap-6 max-h-[705px] h-full mx-auto">
          <div className="  bg-white custom-shadow w-full flex flex-col gap-2.5  p-3  rounded-[13px] pb-5 mx-auto max-h-[341px] ">
            <div className="w-full overflow-hidden h-full rounded-[23px] max-h-[156px] ">
              <img
                src={featured1}
                alt="featured1"
                className="w-full object-cover rounded-[23px]"
              />
            </div>
            <div className="flex gap-6 items-center text-sm">
              <span className="text-[#171717] font-inter font-medium bg-[#D9D9D9] rounded-[18px] px-[5px] ">
                Category
              </span>
              <p className="font-montserrat text-[#13131399]">8min read</p>
            </div>
            <h1 className="font-inter text-[#171717] font-semibold text-[28px] md:max-w-[419px]">
              Article name- headline for article
            </h1>
            <button className="flex gap-5 font-montserrat font-semibold text-[#450099] text-sm items-center">
              <p>Read Now</p>
              <FaLongArrowAltRight />
            </button>
          </div>
          <div className="  bg-white custom-shadow w-full flex flex-col gap-2.5  p-3  rounded-[13px] mx-auto max-h-[341px] pb-5 ">
            <div className="w-full overflow-hidden h-full rounded-[23px] max-h-[156px] ">
              <img
                src={featured1}
                alt="featured1"
                className="w-full object-cover rounded-[23px]"
              />
            </div>
            <div className="flex gap-6 items-center text-sm">
              <span className="text-[#171717] font-inter font-medium bg-[#D9D9D9] rounded-[18px] px-[5px] ">
                Category
              </span>
              <p className="font-montserrat text-[#13131399]">8min read</p>
            </div>
            <h1 className="font-inter text-[#171717] font-semibold text-[28px] md:max-w-[419px]">
              Article name- headline for article
            </h1>
            <button className="flex gap-5 font-montserrat font-semibold text-[#450099] text-sm items-center">
              <p>Read Now</p>
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
