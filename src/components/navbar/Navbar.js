import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import logo from "../../assets/images/tecktick.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showPortalsMenu, setShowPortalsMenu] = useState(false);

  return (
    <nav className="bg-[#2f007a] h-16 flex items-center justify-between px-4 mx-auto text-white">
      {/* Logo */}
      <div className="flex items-center justify-between w-full md:max-w-[1440px] md:container md:flex md:items-center md:justify-between mx-auto">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[40px] h-[auto] rounded-full"
          />
        </div>

        {/* Portals */}
        <div className="hidden md:flex items-center gap-8">
          <div
            className="hidden md:flex items-center relative gap-8"
            onClick={() => setShowPortalsMenu(!showPortalsMenu)}>
            <p className="flex items-center gap-1">
              Portals {showPortalsMenu ? <HiChevronUp /> : <HiChevronDown />}
            </p>
            {/* Portals Menu */}
            {showPortalsMenu && (
              <div className="absolute top-full left-0 bg-[#2f007a] mt-2 py-2 px-4 rounded shadow-md flex flex-col gap-3">
                <div>Events</div>
                <div>Community</div>
                <div>Hackathons</div>
                <div>Merchandise</div>
              </div>
            )}
            {/* Navigation Links for Medium and Larger Screens */}
            {/* About */}
            <div>About</div>
            {/* Blog */}
            <div>Blog</div>
            {/* Gallery */}
            <div>Gallery</div>
            {/* Sign In */}
            <div>Sign In</div>
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setShowMenu(!showMenu)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Responsive Menu */}
        {showMenu && (
          <div className="md:hidden absolute top-16 right-0 bg-[#2f007a] w-full">
            <div className="flex flex-col space-y-4 py-4 px-2">
              {/* Portals Menu */}
              <div
                className="relative"
                onClick={() => setShowPortalsMenu(!showPortalsMenu)}>
                <p className="flex items-center ">
                  Portals{" "}
                  {showPortalsMenu ? <HiChevronUp /> : <HiChevronDown />}
                </p>
                {/* Portals Menu */}
                {showPortalsMenu && (
                  <div className="absolute top-full left-0 bg-[#2f007a] mt-2 py-2 px-4 rounded shadow-md flex flex-col gap-4 ">
                    <div>Events</div>
                    <div>Community</div>
                    <div>Hackathons</div>
                    <div>Merchandise</div>
                  </div>
                )}
              </div>
              <div>About</div>
              <div>Blog</div>
              <div>Gallery</div>
              <div>Sign In</div>
            </div>
          </div>
        )}

        {/* Get Started Button */}
        <div className="hidden md:block bg-[#95C6E4] px-4 py-2 rounded-[15.78px] text-white">
          Get Started
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
