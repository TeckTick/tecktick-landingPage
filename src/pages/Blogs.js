import React from "react";
import { GrNext } from "react-icons/gr";
import data from "../data/blogs-data";
import SideBar from "../components/shared/sidebar/SideBar";

const Blog = () => {
  return (
    <section className="max-w-[1920px] container">
      <section className="max-w-[1300px] mx-auto">
        <h3 className="mt-20 pb-5 font-[500] font-jost text-3xl">Blog</h3>
        <p className="flex items-center gap-[10px] text-[#555555] font-spartan text-[14px]">
          Home <span className="border-b-2 border-b-black w-[10px]"></span>{" "}
          Travel
        </p>

        <section className="my-5 flex gap-12 relative">
          <section className="flex flex-col gap-[5rem]">
            {data.map((blog) => (
              <article
                key={blog.id}
                className="max-w-[940px] max-h-[955px] relative">
                <img
                  src={blog.thumbnail}
                  alt={blog.category}
                  className="w-full h-[593px] object-cover"
                />
                <div className="uppercase font-spartan flex items-center gap-3 my-3 h-[24px] w-[350px] text-[#555555] ">
                  <span className="pt-1">{blog.date}</span>
                  <span className="h-[2px] w-[10px] bg-black"></span>
                  <img
                    src={blog.avatar}
                    alt="profile"
                    className="size-4 rounded-full"
                  />
                  <span className="font-bold text-[14px] text-black absolute py-2 px-5 top-5 left-5 bg-white">
                    {blog.category}
                  </span>
                  <span className="pt-1">{blog.author}</span>
                </div>
                <div className="w-full h-[1px] bg-black/10"></div>

                <h1 className="font-jost font-[500] text-5xl capitalize pt-6 pb-4">
                  {blog.title}
                </h1>
                <p className="font-spartan text-[18px] text-[#555555] ">
                  {blog.article}
                </p>

                <button className="font-spartan font-semibold text-white uppercase bg-gradient-to-r from-[#2F007A] to-[#4698CA] btn-red-shadow h-[60px] w-[171px] rounded-full mt-8 tracking-widest">
                  Read More
                </button>
              </article>
            ))}
          </section>
          <aside>
            <SideBar />
          </aside>
        </section>

        <section className="w-[200px] h-[60px] flex items-center justify-between my-12">
          <button className="bg-black text-white size-[60px] rounded-full flex items-center justify-center font-[500]">
            1
          </button>
          <button className="bg-[#F0F0F0] size-[60px] rounded-full flex items-center justify-center font-[500]">
            2
          </button>
          <button className="bg-[#F0F0F0] size-[60px] rounded-full flex items-center justify-center font-[500]">
            <GrNext />
          </button>
        </section>

        <div className="h-[160px] w-[940ox] bg-[#EFF2FB] mb-14"></div>
      </section>
    </section>
  );
};

export default Blog;
