import React from "react";
import profile_picture from "../assets/images/profile-picture.png";
import quote from "../assets/images/quote.png";
import curve from "../assets/images/curve.png";

import { GoThumbsup, GoShare } from "react-icons/go";

const Post = () => {
  return (
    <div className="w-full max-w-[940px] py-20 px-5 md:px-14 lg:px-20">
      <br />
      <br />
      <span className="">
        <h2 className="text-[30px] font-medium mb-5">Post</h2>
        <p className="text-sm text-[#555555]">
          Home - Travel - A set of the most necessary things on vacation
        </p>
      </span>

      <div className=" mt-8 w-full ">
        <div className="bg-[#EFF2FB] w-full h-80 relative">
          <span className="font-bold text-[10px] uppercase absolute top-5 left-5 custom-bg px-2.5 py-[5px]">
            Travel
          </span>
        </div>

        <span className="my-5 gap-3 text-sm flex items-center text-[#555555] uppercase">
          <p>JUL 06, 2021</p>
          <p>-</p>

          <img src={profile_picture} className="h-5 w-5 object-cover" alt="" />

          <span>MARIE JANE</span>
        </span>
      </div>
      <hr />
      <div className="mt-8">
        <h2 className="capitalize font-medium text-[48px] max-w-[948px]">
          a set of the most necessary things on vacation
        </h2>
        <p className="text-lg text-[#555555] max-w-[940px] mt-5">
          Pariatur cupidatat Lorem irure nisi. Velit qui irure consectetur do
          cupi roident id est ex sunt nostrud nisi mine consectetur do cupi
          roident id est ex sunt nostrud nisi minim ut. Cupidatat velit dolore
          consectetur deserunt laboris magna eiusmod aliquip consectetur commodo
          in eiusmod aliqua cupidatat. Nostrud laboris et eu mollit qui esse
          dolore exercitation in dolore sint nisi eu aliqua. Sit ipsum cillum
          commodo enim eiusmod. Eiusmod et anim laborum consectetur. Proident
          nostrud anim nisi sunt veniam. Labore amet eiusmod dolor adipisicing
          Lorem tempor cillum incididunt proident consequat laborum. Velit anim
          minim est consequat commodo eu reprehenderit eiusmod nisi amet quis
          tempor incididunt. Irure proident aute non sit adipisicing nulla sit
          proident dolore sunt. Aute aute Lorem sint sunt et fugiat laborum. Qui
          incididunt aute pariatur aute laborum elit nulla amet magna enim.
        </p>
      </div>
      <div className="custom-bg mt-20 p-10">
        <img className="mt-[-60px]" src={quote} alt="" />
        <p className="uppercase mb-6 text-sm font-semibold max-w-[840px]">
          “As a participatory media culture, social media platforms or social
          networking sites are forms of mass communication that, through media
          technologies, allow large amounts of product and distribution of
          content to reach the largest audience possible. “
        </p>
        <hr className="text-black bg-black h-[3px] max-w-[840px]" />
        <p className="mt-10 font-medium text-xl">Ralph Edwards</p>
      </div>
      <div className="mt-20 mb-10">
        <h2 className="font-medium text-[30px]">
          Pariatur cupidatat Lorem irure nisi Velit qui
        </h2>
        <p className="text-lg text-[#555555] max-w-[940px] mt-5">
          Pariatur cupidatat Lorem irure nisi. Velit qui irure consectetur do
          cupi roident id est ex sunt nostrud nisi mine consectetur do cupi
          roident id est ex sunt nostrud nisi minim ut. Cupidatat velit dolore
          consectetur deserunt laboris magna eiusmod aliquip consectetur commodo
          in eiusmod aliqua cupidatat. Nostrud laboris et eu mollit qui esse
          dolore exercitation in dolore sint nisi eu aliqua.
        </p>
        <ol className="mt-8 text-lg text-[#555555] max-w-[900px] list-decimal list-inside pl-5 ">
          <li className="mt-5">
            As a participatory media culture, social media platforms or social
            networking sites are forms of mass communication that, through media
            technologies.
          </li>
          <li className="mt-5">
            Allow large amounts of product and distribution of content to reach
            the largest audience possible.
          </li>
          <li className="mt-5">
            However, there are downsides to virtual promotions as servers,
            systems, and websites may crash, fail, or become overloaded with
            information. You also can stand risk of losing uploaded information
            and storage and at a use can also be effected by a number of outside
            variables.
          </li>
        </ol>
      </div>
      <hr />
      <br />
      <span>
        <p className="text-sm">
          <span className="text-xl font-medium">Tags:</span> #TRAVEL - #HOLIDAY
          - #HOBBY{" "}
        </p>
      </span>
      <div className="mt-5 bg-[#3A2EC0] flex gap-5 max-w-[940px] text-white h-[196px]">
        <div className="h-full">
          <img src={curve} alt="" className="h-full w-full" />
        </div>
        <div className="h-full flex items-start justify-center flex-col">
          <h2 className="font-medium text-xl mb-5">Marie Caphlish</h2>
          <p className="max-w-[570px]">
            Web developer since 2006. Create hundreds of websites, HTML and CSS3
            expert, who started to learn web design on a world-class level.
          </p>
        </div>
      </div>
      <div className="flex gap-6 mt-5 font-medium text-xl">
        <span className="flex items-center gap-1">
          <p>Like</p>
          <GoThumbsup size={20} />
        </span>
        <span className="flex items-center gap-1">
          <p>Share</p>
          <GoShare size={20} />
        </span>
      </div>
      <div className="mt-20 custom-bg max-w-[940px] p-8 rounded-md">
        <form className="flex flex-col">
          <h2 className="font-medium text-[30px]">Leave A Comment</h2>
          <br />
          <input
            className="bg-transparent border-b-2 border-[#04021d] mt-5 pb-10 focus:outline-none "
            type="text"
            placeholder="Enter your comment"
          />
          <button
            style={{
              boxShadow: `3.99399995803833px 22.650999069213867px 57px 0px #6149CD42`,
            }}
            className="bg-[#3A2EC0] mt-10 text-white rounded-[50px] w-fit  py-6 custom-shadow text-sm px-[45px]"
            type="submit"
          >
            POST COMMENT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
