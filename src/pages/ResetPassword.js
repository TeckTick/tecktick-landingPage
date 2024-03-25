import React from "react";
import reset_password from "../assets/images/reset-password.png";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const ResetPassword = () => {
  return (
    <div className="w-full h-screen mt-14 bg-white opacity-100">
      <div className="flex justify-center align-center flex-col lg:flex-row h-full md:max-h-[874px]">
        <div
          style={{
            background: `url(${reset_password})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className=" w-full h-full min-h-[375px]  lg:w-[46%] items-start flex justify-start py-20"
        >
          <p className="lg:max-w-[542px] w-full font-bold text-white text-[30px] md:text-[46px] mx-5 lg:mx-auto pt-5 ">
            Join our community and learn from our Proficient authors
          </p>
        </div>
        <div className="w-full lg:w-[54%] p-5">
          <div className="w-full max-w-[410px] lg:mx-auto flex flex-col justify-center h-full items-start gap-6">
            <h2 className="font-bold text-[30px]">Forgot Password?</h2>
            <p className="text-[#7A86A1] text-sm">
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password.
            </p>
            <form>
              <span className="text-sm">
                <label className="font-semibold text-black " htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full mt-1 p-2 mb-6 border border-gray-300 rounded-[24px] px-5 focus:outline-none "
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@example.com"
                />
              </span>
              <button
                style={{
                  boxShadow: `3.99399995803833px 22.650999069213867px 57px 0px #6149CD42`,
                }}
                className="bg-[#2F007A] text-white rounded-[24px] w-full py-2 custom-shadow text-base"
                type="submit"
              >
                Submit
              </button>
            </form>
            <Link
              to="/sign-in"
              className="text-blue-500 mt-5 flex items-center gap-2 text-sm"
            >
              <FaChevronLeft />
              <p>Return to login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
