import React from 'react'
import avator from "../assets/Avatar.png";
const TestmonialCard = () => {
  return (
    <div className="bg-white rounded-lg p-5 w-full max-w-[745px] text-center mx-auto">
      <img
        src={avator}
        alt=""
        className="w-[90px] h-[90px] sm:w-[102px] sm:h-[102px] object-cover  mx-auto rounded-full border-4 border-white mt-[-70px]"
      />

      <h2 className="font-lato font-semibold text-2xl sm:text-[28px] mb-5 mt-3">
        It was a very good experience
      </h2>
      <p className="font-montserrat mb-10  sm:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
        mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh
        in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id
        augue sit cursus pellentesque enim
      </p>
    </div>
  );
}

export default TestmonialCard