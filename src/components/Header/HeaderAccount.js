import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from '@mui/material';

import Welcom from '../Welcom/Welcom'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../src/assets/img/logo_blue.png'
import {useHistory} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  
  
  const history=useHistory();
  const handleGoHome = (e) => {
    e.preventDefault()
          history.push('Home');
   }

  const drawerContent = (
    <List sx={{width:'100%',marginTop:'50px'}}>
      
        <ListItem >
          <ListItemText sx={{color:'white',fontWeight:'bold',fontSize:'20px' }}> Acceuil</ListItemText>
        </ListItem>

        <ListItem >
          <ListItemText sx={{color:'white',fontWeight:'bold',fontSize:'20px' }}> Nos Prix</ListItemText>
        </ListItem>
  
    </List>
  );

  return (
    <div style={{backgroundColor:'white'}}>
    <div className="animated-block">
      <p>.</p>
      <AppBar  sx={{ backgroundColor: 'rgba(255, 255, 255, 0.881)',width:'100%',margin:'auto' }}>
        <Toolbar>
          <div onClick={handleGoHome} style={{ flexGrow: 1 }}>
              <p style={{ margin: '0 10px',color:'#003366',fontWeight:'bold',fontSize:'25px' }}> BETULI </p>
              <p style={{ margin: '0 10px',color:'#003366',fontWeight:'bold',fontSize:'15px' }}> Motel </p>
          </div>
          <Hidden smDown>
            
              <p style={{ margin: '0 10px',color:'#003366',fontWeight:'bold',fontSize:'15px' }}> MON COMPTE </p>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
              </Avatar>
          </Hidden>

          <Hidden mdUp>
            <IconButton  onClick={toggleDrawer}>
              <MenuIcon style={{color:'rgb(183, 90, 8)',fontSize:'40px' }} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Drawer zIndex='2'  color='rgb(183, 90, 8)' anchor="left"   open={drawerOpen} onClose={toggleDrawer}>
      <div
          style={{ width: '300px', padding: '16px',backgroundColor:'rgb(183, 90, 8)' }}
        >
           
            {drawerContent}
        </div>
        <p>.</p>
      </Drawer>
       
    </div>
    </div>
  );
};

export default Header;
