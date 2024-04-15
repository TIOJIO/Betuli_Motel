import React, { useState , useEffect } from 'react';
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
import Deroul from '../Navbars/Deroul'
import { Home } from '@material-ui/icons';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import InventoryIcon from '@mui/icons-material/Inventory';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userSession, setUserSession] = useState([]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(()=>{
   handlegetSessionUser();
 },[])

 const handlegetSessionUser = () =>{
  
  const storedData = JSON.parse(localStorage.getItem('UserSession')) || [];
  if (storedData.length===0) {
     console.log('pas de donne');

  } else {
     setUserSession(storedData);
     setIsLogin(true);
     console.log('donner trouver')
  }
}
 
  const handleGoHome = (e) => {
    e.preventDefault()
          history.push('Home');
   }
  
  
  const history=useHistory();
  const handleSingIn = (e) => {
    e.preventDefault()
          history.push('signin');
   }

   const handleHeaderLink = (e,item)=>{
        e.preventDefault()
        history.push(item);
   }

   const handleLogIn = (e) => {
    e.preventDefault()
          history.push('login');
   }

  const drawerContent = (
    <List sx={{width:'100%',marginTop:'50px'}}>
      
        <ListItem  onClick={(event)=>handleHeaderLink(event,'home')}>
          <ListItemText sx={{color:'white',fontWeight:'bold',fontSize:'12px' }}> <Home/>&nbsp; Acceuil</ListItemText>
        </ListItem>

        <ListItem >
          <ListItemText sx={{color:'white',fontWeight:'bold',fontSize:'20px' }}><SingleBedIcon/>&nbsp; Chambre</ListItemText>
        </ListItem>

        <ListItem >
          <ListItemText sx={{color:'white',fontWeight:'bold',fontSize:'20px' }}> <PriceChangeIcon/>&nbsp; Plan Tarifère</ListItemText>
        </ListItem>

        { isLogin===true? 
            <ListItem onClick={(event)=>handleHeaderLink(event,'reservations')} >
            <ListItemText sx={{color:'white',fontWeight:'bold',fontSize:'20px' }}> <InventoryIcon/>&nbsp;  Mes Reservations </ListItemText>
          </ListItem>
               :
              ''}
  
    </List>
  );

  return (
    <div style={{backgroundColor:'white'}}>
    <div className="animated-block">
      <p>.</p>
      <AppBar  sx={{ backgroundColor: 'rgba(255, 255, 255, 0.881)',width:'100%',margin:'auto' }}>
        <Toolbar>
          <div  onClick={handleGoHome} style={{ flexGrow: 1 }}>
              <p style={{ margin: '0 10px',color:'#003366',fontWeight:'bold',fontSize:'25px' }}> BETULI </p>
              <p style={{ margin: '0 10px',color:'#003366',fontWeight:'bold',fontSize:'15px' }}> Motel </p>
          </div>
          <Hidden smDown>

              
              <Button color="primary"  onClick={(event)=>handleHeaderLink(event,'home')} style={{borderRadius:'50px',fontSize:'12px'}} variant="outlined" > <Home/>&nbsp; Acceuil</Button> &nbsp;&nbsp;&nbsp;
              <Button color="primary" style={{borderRadius:'50px',fontSize:'12px'}} variant="outlined" > <SingleBedIcon/>&nbsp; Chambre</Button>  &nbsp;&nbsp;&nbsp;
              <Button color="primary" style={{borderRadius:'50px',fontSize:'12px'}} variant="outlined" > <PriceChangeIcon/>&nbsp; Plan Tarifère</Button> &nbsp;&nbsp;&nbsp;
              
              { isLogin===true? <Button color="primary" onClick={(event)=>handleHeaderLink(event,'reservations')} style={{borderRadius:'50px',fontSize:'12px'}} variant="outlined" ><InventoryIcon/>&nbsp;  Mes Reservations</Button>
               :
              ''}
                  &nbsp;&nbsp;&nbsp;
              {
                isLogin===true? <Deroul userSession={userSession}/>
                :
                <span>
                  <Button onClick={handleLogIn} variant="contained" style={{backgroundColor:"#003366" ,height:'40px',width:'auto'}} disableElevation>
                     se connecter
                  </Button>
               &nbsp;&nbsp;
                <Button onClick={handleSingIn} variant="contained" style={{backgroundColor:"#003366" ,height:'40px',width:'auto'}} disableElevation>
                    s'inscrire
                </Button>
                </span>
              }
              
          </Hidden>

          <Hidden mdUp>
            <IconButton  onClick={toggleDrawer}>
              <MenuIcon style={{color:'#003366',fontSize:'40px' }} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Drawer zIndex='2'  color='white' anchor="left"   open={drawerOpen} onClose={toggleDrawer}>
      <div
          style={{ width: '300px', padding: '16px',backgroundColor:'#003366' }}
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
