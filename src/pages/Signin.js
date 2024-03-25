import React from 'react'
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import signup from "../assets/images/big image.png";

const Signin = () => {
  return (
    <section>
    <section className="max-w-[1920px] container mx-auto xl:flex ">
      <div className="2xl:w-[878px] xl:w-[50%] w-full relative">
        <img
          src={signup}
          alt="background"
          className="h-[375px] sm:h-auto w-full xl:h-screen"
        />
        <h3 className="w-[340px] h-[123px] md:w-[542px] md:max-h-[243px] text-white md:text-6xl text-4xl font-bold font-jost leading-[41px] md:leading-[81px] absolute top-[30%] left-[53%] md:top-[30%] md:left-[50%] xl:top-1/3 xl:left-1/2 xl:transform -translate-x-1/2 -translate-y-1/2">
          Join our community and learn from our Proficient authors
        </h3>
      </div>

      <div className="2xl:w-[1042px] xl:w-[50%] xl:h-[100vh] border-2 md:h-full w-full h-full 2xl:px-20 lg:py-10 p-5 xl:px-1 xls:m-auto ">
        <div className="flex justify-end mb-[4rem] lg:mb-0 ">
          <p className=" text-[#7A86A1] font-manrope font-semibold ">
            New user?
            <Link to="/signin" className="text-[#6149CD]">
              {" "}
              Create an account
            </Link>
          </p>
        </div>

        <div className="flex lg:h-[100%] xl:h-full xl:w-full xl:m-auto h-full items-center justify-center">
          <form className="lg:w-[620px] lg:h-[594px] md:w-[620px] w-full h-full flex flex-col  justify-center font-manrope">
            <h4 className="font-jost font-bold sm:text-3xl mb-[1.5rem] text-[30px] text-center sm:text-left">
              Sign In
            </h4>
            <div className="flex flex-col gap-5 md:flex-row md:items-center w-full">
              <button
              style={{
                boxShadow: `3.99399995803833px 22.650999069213867px 57px 0px #F9676742`,
              }} 
              className=" md:w-[358px] h-[55px] bg-[#2F007A] text-white flex items-center justify-center  gap-3 rounded-3xl font-semibold cursor-pointer">
                <FaGoogle size={20} />
                Sign in with Google
              </button>
              <button className="w-full md:w-[239px] h-[55px] border-2 border-[#7A86A1] text-[#7A86A1] flex items-center justify-center gap-3 rounded-3xl font-semibold cursor-pointer">
                <FaFacebook size={20} color="#7A86A1" />
                With facebook
              </button>
            </div>

            <p className="text-[#7A86A1] mt-[2rem]">
              Or sign in using your email address
            </p>

            <div className="flex flex-wrap gap-5 my-[1rem]">
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <label htmlFor="email" className="font-semibold">
                 Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="JohnDoe@gmail.com"
                  className="md:w-[298px] border-2 border-[#EBEBEB] rounded-3xl px-5 py-3 "
                />
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className="md:w-[298px] border-2 border-[#EBEBEB] rounded-3xl px-5 py-3 "
                />
              </div>
            </div>

            <div className="flex gap-3">
              <input
                type="checkbox"
                id="terms&conditions"
                name="terms&conditions"
                value="terms"
              />
              <label
                htmlFor="terms&conditions"
                className="text-[#7A86A1] font-semibold mr-6">
                Remember Me{" "}
                <span className="text-[#6149CD] ml-6 cursor-pointer">
                  Forgot Password?
                </span>
              </label>
            </div>

            <button className="w-full md:w-[299px] py-3 bg-[#2F007A] text-white font-semibold rounded-3xl md:mt-[2rem] mt-[2rem] mb-[4rem] ">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  </section>
);
};
export default Signin