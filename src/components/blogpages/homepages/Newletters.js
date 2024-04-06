import React from 'react';

const Newletters = () => {
  return (
    <div className="flex custom-bg justify-center items-center w-full h-[272px] mt-56">
      <div className=" w-[1320px]  flex items-center ">
        <p className="w-[218px] h-[72px] font-jost font-medium text-3xl text-[#000000] mb-4">
          Stay up to date! Subscribe!
        </p>
        <div className="relative">
          <input
            className="w-[417px] border-b-2 border-gray-400 py-2 px-4"
            type="email"
            placeholder="Your email"
          />
        
        </div>
        <button className="font-spartan font-semibold text-white uppercase bg-gradient-to-r from-[#2F007A] to-[#4698CA] btn-red-shadow h-[60px] w-[163px] ml-6 rounded-full mt-8 tracking-widest">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newletters;
