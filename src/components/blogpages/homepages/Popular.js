import React from "react";
import { FaLongArrowAltRight, FaMinus } from "react-icons/fa";
import border from "../../../assets/images/border.png";
import comment from "../../../assets/images/message-circle.png";
import { bloghome } from "../../../data/bloghome";
import PopularPost from "../PopularPost/PopularPost";

const Popular = () => {
  return (
    <div className="flex justify-center mb-24">
      <div className="capitalize w-[1320px] h-[629px] gap-6">
        <div className="flex mb-8 mt-6">
          <h3 className="font-jost font-medium text-5xl">Popular Posts</h3>
          <img src={border} alt="" className="w-[1013px] h-[8px] mt-7" />
        </div>
        <div className="flex items-start justify-between gap-20">
          <div className="">
            <PopularPost
              posts={bloghome}
              numberOfPosts={4}
              category={true}
              title={null}
            />
          </div>

          <div className="relative">
            <div className="">
              {bloghome.slice(4, 5).map((post, index) => (
                <div key={index}>
                  <img
                    src={post.img}
                    loading="lazy"
                    alt="article-cover"
                    className="w-[850px] h-[536px] object-cover bg-[#EFF2FB] mb-5"
                  />
                  <div className="absolute top-[256px] left-12">
                    <div className="w-[410px] h-[271px]">
                      <p className="font-spartan font-normal text-xs text-white left-[234px] ml-72 gap-4">
                        {post.date}
                      </p>
                      <div className="w-[410px] h-[256px] bg-[#FFFFFF] items-center justify-center p-8 ">
                        <p className="font-jost font-medium text-3xl text-[#000000] mb-4">
                          {post.title}
                        </p>
                        <p className="font-spartan font-normal text-base text-[#555555] mb-4">
                          {post.desc}
                        </p>
                        <button className="flex gap-2 font-montserrat font-medium text-[#450099] text-base items-center">
                          <p>Read More</p>
                          <FaLongArrowAltRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
