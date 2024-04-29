import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const MostReadPost = ({ posts, numberOfPosts }) => {
  return (
    <>
      {posts.slice(0, numberOfPosts).map((post) => (
        <div key={post.id} className="card w-[466px] h-[402px] border">
          <div className="relative">
            <p className="absolute top-5 left-5 bg-white py-1 px-3 text-xs tracking-wider font-semibold ">
              {post.category}
            </p>
            <img
              src={post.img}
              loading="lazy"
              alt="article-cover"
              className="w-full h-[235px] object-cover"
            />
          </div>

          <div className="py-3 px-8">
            <p className="capitalize font-jost font-medium text-2xl text-[#000000] w-[316px] line-clamp-2">
              {post.title}
            </p>
            <div className="flex gap-8 items-center ">
              <div className="w-[316px] h-[1px] bg-black/10" />
              <div className="hover:btn-red-shadow flex items-center justify-center bg-[#EFF2FB] size-[50px] rounded-full cursor-pointer hover:text-white hover:bg-gradient-to-r from-[#2F007A] to-[#4698CA] ">
                <FaChevronRight />
              </div>
            </div>
            <div
              className="flex items-center gap-2 tracking-widest uppercase font-spartan font-normal
          text-[#555555] text-sm mb-3">
              <p>{post.date}</p>
              <FaMinus className="text-black" />
              <img
                src={post.avatar}
                loading="lazy"
                alt="avatar"
                className="size-[30px]"
              />{" "}
              <p>{post.author}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MostReadPost;
