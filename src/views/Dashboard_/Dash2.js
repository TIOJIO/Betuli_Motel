import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Divider } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import Add from '@material-ui/icons/Add';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import logo5 from './img6.jpg';




const useStyles = makeStyles({
    main: {
     width:'100%',
     backgroundColor:'white',
     height:'auto',
     margin:'auto',
     borderRadius:'10px',
     display:'flex',
     flexDirection:'column',
    },
    bloc: {
      marginTop:'100px',
      display:'flex',
      width:'100%',
      justifyContent:'space-evenly',
      padding:'0px 0px 35px 0px',
      cursor: 'pointer',
      '&:hover':{
          transform: 'scale(0.8)',
      }
     },
  
  });

export default function Main(){
    const classes = useStyles();

    return(
    <Grid > 

            <Grid container  className={classes.main}>
                <Grid  container className={classes.bloc}>
                             <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                             <Typography style={{fontWeight:'bold'}} >Recent Payment </Typography>
                            <Typography color='textPrimary' >14 Activitées non consulter</Typography>
                       </Grid>
                       <Avatar style={{ backgroundColor:'green'}} >  <Add/></Avatar>
                </Grid>
                <Divider style={{width:'90%',margin:'auto'}}/>

                     
 <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <Avatar fontSize="small" />
          </ListItemIcon>
          <ListItemText>&nbsp;&nbsp; Jean Pierre Paul</ListItemText>
          <ListItemText> ✅ </ListItemText>
          <Typography style={{fontWeight:'bold'}} color="black">
             5684XAF
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Avatar fontSize="small" />
          </ListItemIcon>
          <ListItemText>&nbsp;&nbsp; Jean Pierre Paul</ListItemText>
          <ListItemText> ✅ </ListItemText>
          <Typography style={{fontWeight:'bold'}} color="black">
             5684XAF
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Avatar fontSize="small" />
          </ListItemIcon>
          <ListItemText>&nbsp;&nbsp; Jean Pierre Paul</ListItemText>
          <ListItemText> ✅ </ListItemText>
          <Typography style={{fontWeight:'bold'}} color="black">
             5684XAF
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Avatar fontSize="small" />
          </ListItemIcon>
          <ListItemText>&nbsp;&nbsp; Jean Pierre Paul</ListItemText>
          <ListItemText> ✅ </ListItemText>
          <Typography style={{fontWeight:'bold'}} color="black">
             5684XAF
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Avatar fontSize="small" />
          </ListItemIcon>
          <ListItemText>&nbsp;&nbsp; Jean Pierre Paul</ListItemText>
          <ListItemText> ✅ </ListItemText>
          <Typography style={{fontWeight:'bold'}} color="black">
             5684XAF
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Avatar fontSize="small" />
          </ListItemIcon>
          <ListItemText>&nbsp;&nbsp; Jean Pierre Paul</ListItemText>
          <ListItemText> ✅ </ListItemText>
          <Typography style={{fontWeight:'bold'}} color="black">
             5684XAF
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Avatar fontSize="small" />
          </ListItemIcon>
          <ListItemText>&nbsp;&nbsp; Jean Pierre Paul</ListItemText>
          <ListItemText> ✅ </ListItemText>
          <Typography style={{fontWeight:'bold'}} color="black">
             5684XAF
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Avatar fontSize="small" />
          </ListItemIcon>
          <ListItemText>&nbsp;&nbsp; Jean Pierre Paul</ListItemText>
          <ListItemText> ✅ </ListItemText>
          <Typography style={{fontWeight:'bold'}} color="black">
             5684XAF
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Avatar fontSize="small" />
          </ListItemIcon>
          <ListItemText>&nbsp;&nbsp; Jean Pierre Paul</ListItemText>
          <ListItemText> ✅ </ListItemText>
          <Typography style={{fontWeight:'bold'}} color="black">
             5684XAF
          </Typography>
        </MenuItem>
        
        
       
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>




                      











                      
                      
                       
      

                       <Grid  container className={classes.bloc}>
                             <Typography style={{fontWeight:'bold'}} >Live Teaching Right Now</Typography>
                       </Grid>

                  <Grid  container className={classes.bloc}>
                      <img style={{width:'80%',borderRadius:'10px'}} src={logo5}/>
                   </Grid>


            </Grid>
    </Grid>
    )
}