import React from "react";
import bg from "../../../assets/images/BG.png";
import { FaLongArrowAltRight, FaMinus } from "react-icons/fa";
import border from "../../../assets/images/border.png";
import { bloghome } from "../../../data/bloghome";

const Hotstuff = ({ index }) => {
  // Get the data for the specified index
  const { img, category, title, desc, date, avatar, author } = bloghome[3];

  return (
    <div className="flex justify-center">
      <div className="w-[1320px] h-[744px] top-[4641px] left-[300px] mt-20">
        <div className="flex mb-8 mt-6">
          <h3 className="font-jost font-medium text-5xl text-[#000000]">
            Hot Stuff
          </h3>
          <img src={border} alt="" className="w-[1013px] h-[8px] mt-7" />
        </div>
        <div className="absolute flex">
          <img
            src={img}
            loading="lazy"
            alt="blog-cover"
            className="w-[788px] h-[650px] object-cover"
          />
          <div className="relative">
            <img
              src={bg}
              alt=""
              className="w-[659px] h-[650px] ml-[-74px] items-center"
            />
            <div className="absolute top-[72px] w-[432px] h-[507px] left-[50px]">
              <p className="font-spartan font-bold text-xs py-1 px-3 bg-white text-black w-fit">
                {category}
              </p>
              <p className="font-jost font-medium text-5xl text-white capitalize my-8">
                {title}
              </p>
              <p className="font-spartan  text-base text-white mb-8 line-clamp-3">
                {desc}
              </p>
              <div className="flex items-center  gap-4 text-white font-spartan uppercase tracking-wider mb-8">
                <p className=" text-sm">{date}</p>
                <FaMinus />
                <img
                  src={avatar}
                  loading="lazy"
                  alt="avatar"
                  className="size-[30px] "
                />
                <p className="text-sm tracking-widest">{author}</p>
              </div>
              <button className="flex gap-2 font-montserrat font-medium text-white text-base items-center">
                <p>Read More</p>
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotstuff;
