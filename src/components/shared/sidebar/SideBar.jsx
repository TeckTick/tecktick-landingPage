import React from "react";
import { HiSearch } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import {
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { stories, posts, categories } from "../../../data/sidebar-data";

const SideBar = () => {
  const socialIcons = [
    {
      icon: SlSocialFacebook,
      color: "#555555",
      size: 35,
      id: "facebook",
    },
    {
      icon: SlSocialInstagram,
      color: "#555555",
      size: 35,
      id: "instagram",
    },
    {
      icon: SlSocialLinkedin,
      color: "#555555",
      size: 35,
      id: "linkedin",
    },
    {
      icon: SlSocialTwitter,
      color: "#555555",
      size: 35,
      id: "twitter",
    },
  ];
  return (
    <section className="w-[310px] h-[2250px] flex flex-col gap-[3.5rem]">
      <form className="flex items-center gap-5 font-spartan">
        <input
          type="text"
          placeholder="Search..."
          className="border-b-2 border-b-black bg-transparent w-[230px] outline-none pb-4 font-spartan"
        />
        <button className="btn-red-shadow bg-gradient-to-r from-[#2F007A] to-[#4698CA] size-[60px] rounded-full px-4">
          <HiSearch color="white" size={24} />
        </button>
      </form>

      <article>
        <h5 className="font-jost font-[500] text-3xl mb-4 ">Recent Stories</h5>
        <div className="flex flex-col gap-5">
          {stories.map((story) => (
            <article key={story.id}>
              <img src={story.image} alt={story.image} />
              <div className="pt-2 flex items-center gap-2 uppercase text-[#555555] font-spartan ">
                <p>{story.date}</p>
                <div className="h-[2px] w-[10px] bg-black"></div>
                <p>#{story.category}</p>
              </div>
              <div className="w-full h-[1px] bg-[#DDDDDD]"></div>
              <h4 className="py-3 font-jost font-[500] text-xl capitalize">
                {story.title}
              </h4>
            </article>
          ))}
        </div>
      </article>

      <div>
        <h5 className="font-jost font-[500] text-3xl mb-4 ">Categories</h5>
        <div className="flex flex-wrap gap-[10px] font-spartan font-medium">
          {categories.map((category) => (
            <button
              key={category}
              className="bg-[#EFF2FB] rounded-md px-3 capitalize">
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-[374px] bg-[#EFF2FB]"></div>

      <div>
        <h4 className="font-jost font-[500] text-3xl">Follow Us</h4>
        <div className="w-full h-[1px] bg-[#DDDDDD] my-2 "></div>

        <div className="flex gap-5 justify-between ">
          {socialIcons.map((socialIcon) => (
            <div
              key={socialIcon.id}
              className="bg-[#EFF2FB] size-[60px] flex items-center justify-center rounded-full cursor-pointer ">
              <socialIcon.icon
                color={socialIcon.color}
                size={socialIcon.size}
              />
            </div>
          ))}
        </div>
      </div>

      <article>
        <h4 className="font-jost font-[500] text-3xl mb-4">Popular Posts</h4>
        <div className="flex flex-col gap-3 divide-y">
          {posts.map((post) => (
            <article className="flex gap-3">
              <img
                src={post.image}
                alt={post.title}
                className="size-[90px] object-cover"
              />
              <div className="flex flex-col justify-between ">
                <h6 className="font-jost font-[500] text-xl leading-[24px] capitalize ">
                  {post.title}
                </h6>
                <div className="flex items-center gap-2 text-[12px] font-spartan uppercase text-[#555555]">
                  <p>{post.date}</p>
                  <div className="h-[2px] w-[10px] bg-black"></div>
                  <p className="flex items-center gap-1">
                    <FaRegComment /> {post.comments}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
};

export default SideBar;
