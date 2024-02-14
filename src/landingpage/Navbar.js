import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showPortalsMenu, setShowPortalsMenu] = useState(false);

  return (
    <div className="bg-[#2f007a] h-16 flex items-center justify-between px-4">
      {/* Logo */}
      <div className="text-white text-lg font-bold">Your Logo</div>

      {/* Portals */}
      <div className="hidden md:flex items-center relative text-white" onClick={() => setShowPortalsMenu(!showPortalsMenu)}>
        Portals {showPortalsMenu ? <HiChevronUp /> : <HiChevronDown />}
        {/* Portals Menu */}
        {showPortalsMenu && (
          <div className="absolute top-full left-0 bg-[#2f007a] mt-2 py-2 px-4 rounded shadow-md">
            <div className="text-white">Events</div>
            <div className="text-white">Community</div>
            <div className="text-white">Hackathons</div>
            <div className="text-white">Merchandise</div>
          </div>
        )}
      </div>

      {/* Navigation Links for Medium and Larger Screens */}
      <div className="hidden md:flex items-center space-x-8">
        {/* About */}
        <div className="text-white">About</div>
        {/* Blog */}
        <div className="text-white">Blog</div>
        {/* Gallery */}
        <div className="text-white">Gallery</div>
        {/* Sign In */}
        <div className="text-white">Sign In</div>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setShowMenu(!showMenu)}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Responsive Menu */}
      {showMenu && (
        <div className="md:hidden absolute top-16 right-0 bg-[#2f007a] w-full">
          <div className="flex flex-col space-y-4 py-4 px-2">
            {/* Portals Menu */}
            <div className="relative text-white" onClick={() => setShowPortalsMenu(!showPortalsMenu)}>
              Portals {showPortalsMenu ? <HiChevronUp /> : <HiChevronDown />}
              {/* Portals Menu */}
              {showPortalsMenu && (
                <div className="absolute top-full left-0 bg-[#2f007a] mt-2 py-2 px-4 rounded shadow-md">
                  <div className="text-white">Events</div>
                  <div className="text-white">Community</div>
                  <div className="text-white">Hackathons</div>
                  <div className="text-white">Merchandise</div>
                </div>
              )}
            </div>
            <div className="text-white">About</div>
            <div className="text-white">Blog</div>
            <div className="text-white">Gallery</div>
            <div className="text-white">Sign In</div>
          </div>
        </div>
      )}

      {/* Get Started Button */}
      <div className="hidden md:block bg-[#95C6E4] px-4 py-2 rounded-[15.78px] text-white">Get Started</div>
    </div>
  );
}

export default Navbar;
