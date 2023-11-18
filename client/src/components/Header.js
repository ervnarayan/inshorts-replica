import React, { useEffect, useState } from 'react'
import {AppBar, Box,  Drawer, Link, List, ListItem, ListItemButton, ListItemText, Toolbar, styled} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { getMenu } from '../service/api';

const HeaderBar = styled(AppBar)`
  height:70px;
  background:#ffffff;
  position: static;
  color: #000000;
  font-weight:300px;
`;

const MenuIcon = styled(Menu)`
  color: #000000;
  font-size: 2.4rem;
  cursor: pointer;
`;

const Logo = styled('img')({
  height: 30,
  margin: 'auto',
  paddingRight: '7rem',
});

const LogoLink = styled(Link)`
  display:block;
  margin: auto;
`;

const Header = () => {

  const [nav, setNav] = useState([]);

  useEffect(()=>{
    getMenus();
  },[])


  const getMenus = async () => {
    let response = await getMenu();
    console.log(response);
    setNav(response.data);
  }

  const [toggle, setToggle] = useState(false);
  const toggleDrawer = (open) => {
    setToggle(open);
  }
  const list = () => (
    <Box
      sx={{width: '250px', background: '#303036', height: '100vh', color: '#ffffff', padding: '15px 5px', fontWeight: '300'}}
      role="presentation"
      onClick={() => {toggleDrawer(false)}}
      onKeyDown={() => {toggleDrawer(false)}}
    >
      <List onClick={() => {toggleDrawer(false)}}>

      { nav.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}   


      </List>
    </Box>
  );

  return (
    <HeaderBar>
      <Toolbar>
          <MenuIcon  onClick={()=>{toggleDrawer(true)}} / > 
          <Drawer
            anchor='left'
            open={toggle} 
            onClose={()=>{toggleDrawer(false)}}
          >
            {list()}
          </Drawer>
        <LogoLink href="/"><Logo src='/inshorts_logo.svg' alt='Inshorts Logo'/></LogoLink>
      </Toolbar>
    </HeaderBar>
  )
}

export default Header