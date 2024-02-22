import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import logo from "../../../assets/images/Logo.svg";
import { navLinks, portalLinks } from "../../../data/constants";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showPortalsMenu, setShowPortalsMenu] = useState(false);
  const [navBarColor, setNavBarColor] = useState("bg-[#2f007a]");
  const [overlay, setOverlay] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 10) {
      setNavBarColor("bg-[#2f007a]");
    } else {
      setNavBarColor(navBarColor);
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
      className={`${navBarColor} text-white flex items-center justify-between px-4 py-2 mx-auto sticky top-0 z-[10] font-montserrat`}>
      {/* Logo */}
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 h-screen ${
          showPortalsMenu ? "md:bg-black/50" : "bg-transparent"
        } `}
        onClick={() => {
          setOverlay(false);
          setShowPortalsMenu(false);
          setShowMenu(!showMenu);
        }}></div>

      <div className="flex items-center justify-between w-full md:max-w-[1440px] md:container md:flex md:items-center md:justify-between mx-auto">
        <div
          onClick={(e) => {
            e.preventDefault();
            setShowMenu(false);
          }}>
          <img src={logo} alt="logo" className="w-[5rem]" />
        </div>

        {/* Portals */}
        <div className="hidden md:flex items-center gap-8">
          <div className="hidden md:flex items-center relative gap-8">
            <Link to="/tecktick">Home</Link>
            <p
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                setShowPortalsMenu(!showPortalsMenu);
              }}>
              Portals {showPortalsMenu ? <HiChevronUp /> : <HiChevronDown />}
            </p>

            {/* Portals Menu */}
            {showPortalsMenu && (
              <div className="absolute top-full left-0 bg-[#2f007a] text-white mt-2 py-2 px-4 rounded shadow-md flex flex-col gap-3">
                {portalLinks.map((link) => (
                  <Link
                    to={link.href}
                    key={link.href}
                    onClick={() => setShowPortalsMenu(!showPortalsMenu)}>
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
        <div
          className="md:hidden"
          onClick={() => {
            setShowMenu(!showMenu); // > true
            setOverlay(true);
            console.log(showMenu);
          }}>
          <div>
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
          </div>
        </div>

        {/* Responsive Menu */}
        {showMenu && (
          <div className="md:hidden absolute top-16 right-0 bg-[#2f007a] w-full">
            <div className="flex flex-col space-y-4 py-4 px-2 pl-10">
              {/* Portals Menu */}
              <Link to="/tecktick" onClick={() => setShowMenu(!showMenu)}>
                Home
              </Link>
              <div className="relative">
                <p
                  className="flex items-center cursor-pointer"
                  onClick={() => {
                    setShowPortalsMenu(!showPortalsMenu);
                    // setOverlay(true);
                    console.log(showPortalsMenu);
                  }}>
                  Portals{" "}
                  {showPortalsMenu ? <HiChevronUp /> : <HiChevronDown />}
                </p>
                {/* Portals Menu */}
                {showPortalsMenu && (
                  <div className="absolute top-full left-0 bg-[#2f007a] mt-2 py-2 px-4 rounded shadow-md flex flex-col gap-4 ">
                    {portalLinks.map((link) => (
                      <Link
                        to={link.href}
                        key={link.href}
                        onClick={() => setShowMenu(!showMenu)}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {navLinks.map((link) => (
                <Link
                  to={link.href}
                  key={link.href}
                  onClick={() => setShowMenu(!showMenu)}>
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
