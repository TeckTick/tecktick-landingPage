import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import logo from "../../../assets/images/tecktick.png";


import { navLinks, portalLinks } from "../../../data/constants";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showPortalsMenu, setShowPortalsMenu] = useState(false);
  const [navBarColor, setNavBarColor] = useState("transparent");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 10) {
      setNavBarColor("bg-[#2f007a]");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${navBarColor} flex items-center justify-between px-4 py-2 mx-auto text-white sticky top-0 z-[10] `}>
      {/* Logo */}
      <div className="flex items-center justify-between w-full md:max-w-[1440px] md:container md:flex md:items-center md:justify-between mx-auto">
        <Link to="/tecktick">
          <img
            src={logo}
            alt="logo"
            className="w-[40px] h-[auto] rounded-full"
          />
        </Link>

        {/* Portals */}
        <div className="hidden md:flex items-center gap-8">
          <div className="hidden md:flex items-center relative gap-8">
            <p
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setShowPortalsMenu(!showPortalsMenu)}>
              Portals {showPortalsMenu ? <HiChevronUp /> : <HiChevronDown />}
            </p>

            {/* Portals Menu */}
            {showPortalsMenu && (
              <div className="absolute top-full left-0 bg-[#2f007a] mt-2 py-2 px-4 rounded shadow-md flex flex-col gap-3">
                {portalLinks.map((link) => (
                  <Link to={link.href} key={link.href}>
                    {link.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Navigation Links for Medium and Larger Screens */}
            {navLinks.map((link) => (
              <Link to={link.href} key={link.href}>
                {link.name}
              </Link>
            ))}
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
              <div className="relative">
                <p
                  className="flex items-center "
                  onClick={() => setShowPortalsMenu(!showPortalsMenu)}>
                  Portals{" "}
                  {showPortalsMenu ? <HiChevronUp /> : <HiChevronDown />}
                </p>
                {/* Portals Menu */}
                {showPortalsMenu && (
                  <div className="absolute top-full left-0 bg-[#2f007a] mt-2 py-2 px-4 rounded shadow-md flex flex-col gap-4 ">
                    {portalLinks.map((link) => (
                      <Link to={link.href} key={link.href}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {navLinks.map((link) => (
                <Link to={link.href} key={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Get Started Button */}
        <button className="hidden md:block bg-[#95C6E4] px-4 py-2 rounded-[15.78px] text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
