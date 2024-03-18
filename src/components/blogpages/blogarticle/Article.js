import React from "react";
import arrow from "../../../assets/images/back-arrow.png";
import heart from "../../../assets/images/like-icon.png";
import reply from "../../../assets/images/reply-icon.png";
import twitter from "../../../assets/images/x.png";
import instagram from "../../../assets/images/instagram.png";
import whatsapp from "../../../assets/images/whatsapp.png";

import { testArticle, replyArticle } from "../../../data/articles-data";

const Article = () => {
  return (
    <section className="max-w-[1440px] container mx-auto">
      <section className="max-w-[1023px] mx-auto container mt-[7rem] p-2">
        {/* use navigate to push back to previous page => blogs page */}
        <div className="flex items-center gap-4 mb-[24px] cursor-pointer ">
          <img src={arrow} alt="back" />
          <p className="text-montserrat text-[#2f007a] font-semibold ">Back</p>
        </div>

        <div className="flex flex-col gap-6 justify-between">
          <div className="flex items-center gap-4">
            <p className="bg-[#D9D9D9] rounded-full px-2 text-inter font-[500]  md:text-[22.63px] ">
              {testArticle.category}
            </p>
            <p className="font-montserrat font-semibold md:text-xl text-black/60 ">
              {testArticle.date}
            </p>
          </div>

          <h1 className="font-bold text-montserrat text-2xl md:text-5xl md:leading-[72px] ">
            {testArticle.title}
          </h1>

          <div className="flex items-center gap-4">
            <img
              src={testArticle.profile}
              alt="profilephoto"
              className="rounded-full w-[4.37rem] h-[4.37rem]"
            />
            <div className="font-montserrat">
              <p className="font-bold ">
                {testArticle.firstname} {testArticle.lastname}
              </p>
              <p className="text-black/60">
                {testArticle.position}@{testArticle.company}
              </p>
            </div>
          </div>
        </div>

        <article className="my-10 flex flex-col gap-8">
          <div className="rounded-3xl">
            <img src={testArticle.banner} alt="article banner" />
          </div>

          <p>{testArticle.article}</p>
        </article>

        <hr />

        <div className="mt-2 flex font-montserrat items-center justify-between">
          <div className="flex gap-8 md:gap-11">
            <div className="flex items-center gap-2">
              <img src={heart} alt="like" /> <span>{testArticle.likes}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={reply} alt="replies" />{" "}
              <span>{testArticle.replies}</span>
            </div>
          </div>

          <div className="flex gap-5">
            <p>Share</p>
            <img
              src={whatsapp}
              alt="whatsapp"
              className="object-contain cursor-pointer"
            />
            <img
              src={instagram}
              alt="instagram"
              className="object-contain cursor-pointer"
            />
            <img
              src={twitter}
              alt="twitter"
              className="object-contain cursor-pointer"
            />
          </div>
        </div>

        <section className="mt-10">
          <p className="font-[Source Sans Pro] font-semibold">Comment</p>
          <div className="border-2 border-black/30 rounded-lg p-5 mt-4 mb-16">
            <div className="flex items-center gap-2">
              <img
                src={replyArticle.profile}
                alt="profile"
                className="w-[40px] h-[40px] rounded-full "
              />
              <p className="font-montserrat font-semibold">
                {replyArticle.firstname} {replyArticle.lastname}
              </p>
            </div>
            <form className="grid mt-4">
              <textarea className="w-full min-h-[5rem] border-b-2 border-b-black/30 outline-none p-2"></textarea>
              <button className="font-sans font-semibold bg-[#450099] text-white py-2 px-5 mt-4 justify-self-end rounded-full">
                Post
              </button>
            </form>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Article;
