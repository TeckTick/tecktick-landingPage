import React from "react";
import { HiSearch } from "react-icons/hi";
import {
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { categories } from "../../../data/sidebar-data";
import PopularPost from "../../blogpages/PopularPost/PopularPost";
import { bloghome } from "../../../data/bloghome.js";
import RecentStories from "../../blogpages/RecentStories/RecentStories.jsx";

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

      <RecentStories
        posts={bloghome}
        numberOfPosts={2}
        title={"Recent Stories"}
      />

      {/* Categories */}
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

      <PopularPost
        posts={bloghome}
        numberOfPosts={3}
        category={false}
        title={"Popular Posts"}
      />
    </section>
  );
};

export default SideBar;
