import React from "react";
import { FaLongArrowAltRight, FaMinus } from "react-icons/fa";
import border from "../../../assets/images/border.png";
import { bloghome } from "../../../data/bloghome";

const Topoftheweek = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="all w-[1320px] h-[470px] left-[300px]">
        <div className="head flex mb-10 gap-4">
          <h3 className="capitalize font-jost font-medium text-5xl text-[#000000]">
            top of the week
          </h3>
          <img src={border} alt="" className="w-[713px] h-[8px] mt-7" />
          <button className="flex gap-2 font-montserrat font-medium text-[#000000] text-base items-center">
            <p>view all posts</p>
            <FaLongArrowAltRight />
          </button>
        </div>
        <div
          className="content grid grid-cols-3 gap-10"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {bloghome.slice(0, 3).map((post, index) => (
            <div key={index} className="card w-[420px] h-[422px] top-[94px]">
              <img
                src={post.img}
                loading="lazy"
                alt="article-cover"
                className="w-[420px] h-[220px] object-cover mb-4"
              />
              <p className="category  h-[11px] font-jost font-bold text-xs mb-4  ">
                {post.category}
              </p>
              <p className="title capitalize mb-4 font-jost font-medium text-2xl ">
                {post.title}
              </p>
              <div className="flex gap-2 items-center mb-4 tracking-widest uppercase text-sm text-[#555555]">
                <p className=" font-spartan font-normal">{post.date}</p>
                <FaMinus className="w-[10px] text-[#000000] text-center" />
                <img
                  src={post.avatar}
                  loading="lazy"
                  alt="avatar"
                  className="size-[20px] rounded-full"
                />
                <p>{post.author}</p>
              </div>
              <button className="flex gap-2 font-montserrat font-medium text-black text-base items-center hover:text-[#4C50B8]">
                Read More
                <FaLongArrowAltRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topoftheweek;
