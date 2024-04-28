import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import border from "../../../assets/images/border.png";
import { bloghome } from "../../../data/bloghome";

import MostReadPost from "../MostReadPost/MostReadPost";

const Mostread = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="all w-[1320px] h-[928px] left-[300px] mt-44 mb-44">
        <div className="flex mb-8 mt-20 gap-3">
          <h2 className="capitalize gap-[20px] h-[53px] font-jost font-medium text-5xl text-[#000000]">
            most read posts
          </h2>
          <img src={border} alt="" className="w-[413px] h-[8px] mt-7" />
          <button className="flex gap-2 font-montserrat font-medium text-[#000000] text-base items-center mr-12">
            <p>view all posts</p>
            <FaLongArrowAltRight />
          </button>
          <h3 className="head font-jost font-medium text-5xl text-[#000000]">
            Categories
          </h3>
        </div>

        <div className="flex gap-10">
          <div className="boxes grid grid-cols-2 gap-4">
            <MostReadPost posts={bloghome} numberOfPosts={4} />
          </div>

          <div className="sidebar w-[307px] h-[928px] left-[1013px]">
            <div className="grid grid-rows-7">
              {bloghome.slice(1, 8).map((post, index) => (
                <div key={index} className="content w-[307px] h-[50px]">
                  <p className="uppercase w-[98px] h-[19px] top-[17px] gap-2 font-jost font-semibold text-xs text-[#000000]">
                    {post.category} <span className="text-[#555555]">15</span>
                  </p>
                  <div className="line w-[307px]"></div>
                </div>
              ))}
            </div>
            <div className="w-[307px] h-[374px] bg-[#EFF2FB]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mostread;
