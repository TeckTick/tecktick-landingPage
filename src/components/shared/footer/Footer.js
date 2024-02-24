import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#2F007A]">
      <section className="max-w-[1440px] container flex flex-col items-center mx-auto text-white p-5 sm:p-10 md:p-20">
        <h1 className="font-montserrat font-semibold text-[24px] sm:text-[32px] lg:text-[44px] w-full max-w-[725px] mx-auto text-center mb-8">
          Bring Your Teams Together Wherever They Are
        </h1>
        <button className="text-black text-xl font-montserrat bg-[#95C6E4] rounded-[15px] w-[200px] lg:w-[270px] h-[64px] font-medium ">
          Get Started
        </button>

        <section className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-6 w-full my-20 sm:my-24 mx-auto place-content-center gap-y-8">
          <div className="flex flex-col gap-3 font-patrick h-full mx-auto items-start md:items-start justify-start">
            <h2 className="text-xl border-b lg:border-b-0">Features</h2>

            <p>Careers</p>
            <p>Feedback Form</p>
          </div>
          <div className="flex flex-col gap-3 font-patrick h-full mx-auto items-start md:items-start justify-start ">
            <h2 className="text-xl border-b lg:border-b-0">Product</h2>
            <p>Overview</p>
            <p>Contact Us</p>
          </div>
          <div className="flex flex-col gap-3 font-patrick h-full mx-auto items-start md:items-start justify-start ">
            <h2 className="text-xl border-b lg:border-b-0">Solutions</h2>
            <p>Documentation</p>
            <p>Updates</p>
          </div>
          <div className="flex flex-col gap-3 font-patrick h-full mx-auto items-start md:items-start justify-start ">
            <h2 className="text-xl border-b lg:border-b-0">Customers</h2>
            <p>Our Company</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-3 font-patrick h-full mx-auto items-start md:items-start justify-start ">
            <h2 className="text-xl border-b lg:border-b-0">Resources</h2>
            <p>Pricing</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col gap-3 font-patrick h-full mx-auto items-start md:items-start justify-start ">
            <h2 className="text-xl border-b lg:border-b-0">About Us</h2>
            <p>Tech</p>
            <p>News</p>
          </div>
        </section>

        <div className="border-t-2 w-full text-center pt-8">
          <p className="font-patrick">&copy; 2024 TeckTick</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
