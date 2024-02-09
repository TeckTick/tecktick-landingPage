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
    <div>
      <div>
        <div className='flex flex-row justify-items-center items-center content-center w-full '>
          <div> 
            <img className="h-10 mx-2 my-2" src={logo} alt='logo-image'></img>
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