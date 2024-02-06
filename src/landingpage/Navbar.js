import React from 'react'
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src='' alt='logo'/>
      </div>
      <div className='nav-menu'>
        <a></a>
        <a>About</a>
        <a>Blog</a>
        <a>Gallery</a>
        <a>Sign In</a>
        
        <Button><a>Get Started</a></Button>
     </div>
    </div>
  )
}

export default Navbar