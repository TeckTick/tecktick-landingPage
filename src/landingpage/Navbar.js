import React from 'react'
import logo from "../assets/images/tecktick.png"
import {navbarData} from "../DataForPage/dummyData"
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
      <div>
        <div className='flex flex-row justify-items-center items-center content-center nav-width '>
          <div> 
            <img className="h-10 mx-2 my-2" src={logo} alt='logo-img'></img>
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