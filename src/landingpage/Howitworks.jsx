import React from "react";
import deloitte from "../assets/images/deloitte.svg";
import unilever from "../assets/images/unilever.svg";
import bbc from "../assets/images/bbc.svg";
import notification from "../assets/images/notification.png";
import media from "../assets/images/media.png";
import support from "../assets/images/support.png";
import community from "../assets/images/community.png";

const Howitworks = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center h-[128px]">
        <span>
          <img src={bbc} alt="" />
        </span>
        <span>
          <img src={deloitte} alt="" />
        </span>
        <span>
          <img src={unilever} alt="" />
        </span>
        <span>
          <img src={deloitte} alt="" />
        </span>
      </div>
      <hr className="mx-5" />
      <div className="py-8 flex flex-col items-center justify-center gap-12">
        <h1
          className="text-[24px] font-medium sm:text-[36px] font-montserrat text-center lg:text-[40px] text-[#4A4A68]
"
        >
          How It Works
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-5 mx-auto w-full gap-5">
          <div className="flex flex-col gap-5 items-center justify-center text-center mx-auto">
            <span
              className="h-[84px] w-[84px] bg-[#EBE5FF]

rounded-lg p-5    flex items-center justify-center"
            >
              <img src={media} alt="" className="object-cover w-full" />
            </span>
            <h2 className="font-semibold text-[#3a4f39]">Title goes here!</h2>
            <p className="text-[#3a4f39]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center text-center">
            <span
              className="h-[84px] w-[84px] bg-[#EBE5FF]

rounded-lg p-5    flex items-center justify-center"
            >
              <img src={notification} alt="" className="object-cover w-full" />
            </span>
            <h2 className="font-semibold text-[#3a4f39]">Title goes here!</h2>
            <p className="text-[#3a4f39]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center text-center">
            <span
              className="h-[84px] w-[84px] bg-[#EBE5FF]

rounded-lg p-5    flex items-center justify-center"
            >
              <img src={support} alt="" className="object-cover w-full" />
            </span>
            <h2 className="font-semibold text-[#3a4f39]">Title goes here!</h2>
            <p className="text-[#3a4f39]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center text-center">
            <span
              className="h-[84px] w-[84px] bg-[#EBE5FF]

rounded-lg p-5    flex items-center justify-center"
            >
              <img src={community} alt="" className="object-cover w-full" />
            </span>
            <h2 className="font-semibold text-[#3a4f39]">Title goes here!</h2>
            <p className="text-[#3a4f39]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
