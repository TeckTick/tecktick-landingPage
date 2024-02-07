import React from 'react'
import { useState, useEffect } from "react"
import logo from "../assets/images/tecktick.png"
import {navbarData} from "../DataForPage/dummyData"
import { Link } from 'react-scroll'

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const handleScroll = () => {
    if(window.scrollY > 50){
      setScroll(true);
    }else{
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, [scroll])

  return (
    <div>
      <div className={scroll ? "h-16 fixed flex transition items-center ease-in-out duration-500 bg-red-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20" : ""}>
        <div className='flex flex-row justify-items-center items-center content-center w-full '>
          <div className='logo'> 
            <img className="logo h-10 mx-2 my-2" src={logo} alt='logo-image'></img>
          </div>
          <div className='flex flex-row'>
            {navbarData.map((item) => {
              return <div key={item.id}>
                <Link to={item.link} spy={true} smooth={true} hashSpy={true} offset={50} duration={500} isDynamic={true} ignoreCancelEvents={false} spyThrottle={500} className='cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2'>{item.name}</Link>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar