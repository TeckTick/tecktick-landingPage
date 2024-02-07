import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-[#2F007A] flex flex-col items-center text-white p-5 sm:p-10 md:p-20 w-full
"
    >
      <h1 className="font-montserrat font-semibold text-[44px] w-full max-w-[725px] max-auto text-center mb-8">
        Bring Your Teams Together Wherever They Are
      </h1>
      <button className="text-black text-xl font-montserrat bg-[#95C6E4] rounded-[15px] w-[270px] h-[64px] font-medium ">
        Get Started
      </button>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:grid-cols-6 w-full my-24">
        <div className="flex flex-col gap-5 font-patrick w-full mx-auto justify-center">
          <h2 className="font-montserrat text-[25px] leading-[28px]">
            TeckTick
          </h2>
          <p>Features</p>
          <p>Tech</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col gap-5 font-patrick w-full mx-auto justify-center">
          <h2 className="text-xl">Product</h2>
          <p>Overview</p>
          <p>Careers</p>
          <p>News</p>
        </div>
        <div className="flex flex-col gap-5 font-patrick w-full mx-auto justify-center">
          <h2 className="text-xl">Solutions</h2>
          <p>Documentation</p>
          <p>Contact Us</p>
          <p>Resources</p>
        </div>
        <div className="flex flex-col gap-5 font-patrick w-full mx-auto justify-center">
          <h2 className="text-xl">Customers</h2>
          <p>Our Company</p>
          <p>Updates</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col gap-5 font-patrick w-full mx-auto justify-center">
          <h2 className="text-xl">Resources</h2>
          <p>Pricing</p>
          <p>Updates</p>
          <p>Non-Profit</p>
        </div>
        <div className="font-patrick w-full">
          <h2 className="text-xl">About Us</h2>
        </div>
      </div>

      <div className="border-t-2 w-full text-center pt-8">
        <p>&copy; 2024 TechTick</p>
      </div>
    </div>
  );
};

export default Footer;
