import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useState } from "react"
import logo from "../assets/images/tecktick.png"
import { Drawer, List ,ListItem } from '@material-tailwind/react';
import { Box, ListItemButton, ListItemIcon, ListItemText }  from "@mui/material"
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const menuOptions = [

    {
      id: "1",
      icon: <HomeIcon/>,
      name: "Portals",
    },
  
    {
      id: "1",
      icon: <InfoIcon/>,
        name: "About",
    },
  
    {
      id: "2",
      icon: "BG",
      name: "Blog",
    },
    {
      id: "3",
      icon: "GY",
      name: "Gallery",
    },
    {
      id: "4",
      icon: "S.I",
      name: "Sign In",
    },
    {
      id: "5",
      icon: "G.S",
      name: "Get Started",
    }, 
  ];

  return (
    <nav className=''>
      <div className='nav-logo-container'>
        <img src={logo} alt='logo-image' />
      </div>
      <div className='navbar-links-container'>
        <a href=''>Portals</a>
        <a href=''>About</a>
        <a href=''>Blog</a>
        <a href=''>Gallery</a>
        <a href=''>Sign In</a>
        <a href=''><button className='primary-button'>Get Started</button></a>

      </div>
      <div className='navbar-menu-container'>
        <HomeOutlinedIcon onClick={() => setOpenMenu(true)}/>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name}>{item.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar