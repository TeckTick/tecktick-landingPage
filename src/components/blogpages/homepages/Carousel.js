import React from "react";
import Marquee from "react-fast-marquee";
import { bloghome } from "../../../data/bloghome";

const Carousel = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center my-8">
      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        {bloghome.map((post, index) => (
          <div
            key={index}
            className="card carouselbg mx-1 relative border-2 w-[750px] h-auto mt-10 flex flex-col justify-center items-center">
            <img
              loading="lazy"
              src={post.img}
              alt="article-cover"
              className="w-full h-auto object-cover block max-h-[450px]"
            />
            <div className="content w-full absolute left-0 bottom-0 bg-black/60 h-2/5 px-4 py-6 flex flex-col items-center">
              <p className="category w-[100px] h-[21px] text-center content-center bg-white font-jost font-bold text-xs text-[#000000]">
                {post.category}
              </p>
              <p className="title w-[515px] mt-4 font-jost font-medium text-xl text-white capitalize text-center line-clamp-2">
                {post.title}
              </p>
              <div className="date mt-4 flex items-center gap-4 font-jost font-normal text-sm text-white tracking-widest uppercase">
                <p>{post.date}</p>
                <div className="h-[2px] w-[10px] bg-white"></div>
                <img
                  src={post.avatar}
                  loading="lazy"
                  alt="author"
                  className="size-[30px] rounded-full"
                />
                <p>{post.author}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Carousel;
