import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import signup from "../assets/images/bgsignup.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user/register/",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <section className="max-w-[1920px] container mx-auto xl:flex ">
        <div className="2xl:w-[878px] xl:w-[50%] w-full relative">
          <img
            src={signup}
            alt="background"
            className="h-auto w-full xl:h-screen"
          />
          <h3 className="w-[340px] h-[123px] md:w-[542px] md:max-h-[243px] text-white md:text-6xl text-4xl font-bold font-jost leading-[41px] md:leading-[81px] absolute top-[30%] left-[53%] md:top-[30%] md:left-[50%] xl:top-1/3 xl:left-1/2 xl:transform -translate-x-1/2 -translate-y-1/2">
            Join our community and learn from our Proficient authors
          </h3>
        </div>

        <div className="2xl:w-[1042px] xl:w-[50%] xl:h-[100vh] border-2 md:h-full w-full h-full 2xl:px-20 lg:py-10 p-5 xl:px-1 xls:m-auto ">
          <div className="flex justify-end mb-[4rem] lg:mb-0 ">
            <p className=" text-[#7A86A1] font-manrope font-semibold ">
              Already a member?
              <Link to="/sign-in" className="text-[#6149CD]">
                {" "}
                Sign in
              </Link>
            </p>
          </div>

          <div className="flex lg:h-[100%] xl:h-full xl:w-full xl:m-auto h-full items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="lg:w-[620px] lg:h-[594px] md:w-[620px] w-full h-full flex flex-col items-start justify-center font-manrope">
              <h4 className="font-jost font-bold text-3xl mb-[1.5rem] text-center">
                Create Your Account
              </h4>
              <div className="flex flex-col gap-5 md:flex-row md:items-center w-full">
                <button className="btn-red-shadow md:w-[358px] h-[55px] bg-[#2F007A] text-white flex items-center justify-center gap-3 rounded-3xl font-semibold cursor-pointer">
                  <FaGoogle size={20} />
                  Sign Up with Google
                </button>
                <button className="w-full md:w-[239px] h-[55px] border-2 border-[#7A86A1] text-[#7A86A1] flex items-center justify-center gap-3 rounded-3xl font-semibold cursor-pointer">
                  <FaFacebook size={20} color="#7A86A1" />
                  With facebook
                </button>
              </div>

              <p className="text-[#7A86A1] mt-[2rem]">
                Or sign up using your email address
              </p>

              <div className="flex flex-wrap gap-5 my-[1rem]">
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <label htmlFor="name" className="font-semibold">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Johnson Doe"
                    className="md:w-[298px] border-2 border-[#EBEBEB] rounded-3xl px-5 py-3 "
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <label htmlFor="username" className="font-semibold">
                    UserName
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="JohnDoe"
                    className=" md:w-[298px] border-2 border-[#EBEBEB] rounded-3xl px-5 py-3 "
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="JohnDoe@gmail.com"
                    className="md:w-[298px] border-2 border-[#EBEBEB] rounded-3xl px-5 py-3 "
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <label htmlFor="password" className="font-semibold">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="md:w-[298px] border-2 border-[#EBEBEB] rounded-3xl px-5 py-3 "
                    value={formData.password}
                    onChange={handleChange}
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
                  className="text-[#7A86A1] font-semibold">
                  I accept the{" "}
                  <span className="text-[#6149CD] cursor-pointer">
                    Terms and Conditions
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-[299px] py-3 bg-[#2F007A] text-white font-semibold rounded-3xl md:mt-[2rem] mt-[2rem] mb-[4rem] ">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Signup;
