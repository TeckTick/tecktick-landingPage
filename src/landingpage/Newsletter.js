import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g. send email to server)
  };

  return (
    <div className="bg-[#FFFFFF] p-8 items-center h-[307px] g-[73px]">
      <div className="text-[24px] font-montserrat text-center font-bold mb-4">Get Our Weekly Newsletter</div>
      <p className="mb-10 text-center">
      Explanation of why you are going to love it and the benefit!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="flex-1 p-2 border border-[#ECE4FF] rounded-[15.78px] mb-2 sm:mb-0 sm:mr-2"
          required
        />
        <button
          type="submit"
          className="bg-[#450099] text-white py-2 px-4 rounded-[15.78px] mb-[10px] w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
