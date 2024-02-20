import React from "react";

const MissionStory = ({
  title,
  description1,
  description2,
  image,
  smallImg,
  flexStyle,
}) => {
  return (
    <section className="max-w-[1440px] md:max-h-[768px] lg:h-full container mx-auto xl:px-[6.25rem] md:px-4">
      <div
        className={`flex flex-col items-start justify-between ${flexStyle} lg:items-center lg:justify-between gap-2.5 p-2.5`}>
        <article className="font-montserrat flex flex-col gap-3 max-w-full max-h-auto lg:max-w-[30.3rem] md:max-h-[15.67rem] lg:max-h-[18.75rem]">
          <h1 className="font-medium text-[2.75rem] text-[#450099] leading-[3.025rem] ">
            {title}
          </h1>
          <p className="text-xl leading-8 text-[#262641]">{description1}</p>
          <p className="text-xl leading-8 text-[#262641]">{description2}</p>
        </article>

        <div className="max-w-full lg:max-w-[43.1rem] my-5">
          <img
            src={smallImg} // Default image for small screens
            alt="mission_image"
            className="max-w-full h-auto lg:hidden" // Hide on large screens
          />
          <img
            src={image} // Large image for large screens
            alt="mission_image"
            className="max-w-full h-auto hidden lg:block" // Hide on small screens
          />
        </div>
      </div>
    </section>
  );
};

export default MissionStory;
