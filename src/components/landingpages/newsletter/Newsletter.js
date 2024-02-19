import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g. send email to server)
  };

  return (
    <section className="bg-[#FFFFFF] p-8 items-center h-[307px] g-[73px]">
      <h1
        className="text-[24px] md:text-[48px] font-montserrat text-center font-semibold mb-4 text-[#4A4A68]
">
        Get Our Weekly Newsletter
      </h1>
      <p className="mb-10 text-center text-sm sm:text-xl text-[#4A4A68]">
        Explanation of why you are going to love it and the benefit!
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:flex-row sm:items-center relative  md:max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="flex-1 py-2 px-4 border border-[#ECE4FF] rounded-lg md:rounded-l-lg md:rounded-r-none  mb-2 sm:mb-0 sm:mr-2 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-[#450099] text-white py-[9px] uppercase px-[3rem] rounded-lg md:rounded-r-lg md:rounded-l-none md:absolute right-0 bottom-[-10px] mb-[10px] sm:w-auto">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
