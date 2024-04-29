import React from "react";
import border from "../../../assets/images/border.png";
import { FaMinus } from "react-icons/fa";
import { bloghome } from "../../../data/bloghome";
import { FaChevronRight } from "react-icons/fa6";
import RecentStories from "../RecentStories/RecentStories";
import RecentPost from "../RecentPost/RecentPost";

const Recent = () => {
  return (
    <div className="flex justify-center mb-24">
      <div className="w-[1320px] h-[1048px] top-[1153px] items-center">
        <div className="flex mb-8 mt-6">
          <h2 className="gap-[20px] h-[53px] font-jost font-medium text-5xl text-[#000000]">
            Recent posts
          </h2>
          <img src={border} alt="" className="w-[1013px] h-[8px] mt-7" />
        </div>
        <div className="flex gap-10">
          <div className="grid grid-row-3 gap-6">
            <RecentPost numberOfPosts={3} posts={bloghome} />
          </div>

          <div className="w-[307px] h-[837px] top-[93px] left-[1013px]">
            <RecentStories posts={bloghome} numberOfPosts={3} title={null} />
            <button className="font-spartan font-semibold text-white uppercase bg-gradient-to-r from-[#2F007A] to-[#4698CA] btn-red-shadow h-[60px] w-[301px] rounded-full mt-8 tracking-widest">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
