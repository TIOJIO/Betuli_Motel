import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Paper } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import logo from './img6.jpg';
import Deroul from './Elements/Deroul';




const useStyles = makeStyles({
    main: {
     width:'100%',
     backgroundColor:'white',
     height:'auto',
     borderRadius:'10px',
     marginTop:'40px',
    
     
    },
    bloc1: {
      width:'100%',
      backgroundColor:'green',
      height:'100px',
      borderRadius:'10px 10px 0px 0px',
     },
     img: {
      width:'100px',
      height:'100px',
      border:'5px solid white',
      borderRadius:'100%',
     },
     spanimage: {
        padding:'-150px 0px 0px 0px',
        marginTop:'-50px',
        textAlign:'left'
     },
     root: {
      width:'100%',
       display:'flex',
       justifyContent:'space-evenly',
   },
   contact: {
      marginTop:'70px',
   },
   name: {
      fontWeight:'bold',
      fontSize:'30px'
   },
  
  });

export default function Main(){
  
   

    const classes = useStyles();

    return(
    <Grid > 
      <Grid container  className={classes.main}>
         <div className={classes.bloc1}> </div> 

         <div className={classes.root}>
             <div className={classes.spanimage}>
                 <span style={{padding:'0px 0px 0px 30px'}}>
                     <img className={classes.img} src={logo}/>
                  </span>
                 <p className={classes.name}>Nabila azela</p>
                 <p style={{color:'green',fontWeight:'bold'}}>Admin</p>
               <span style={{display:'flex'}}>
                   <AddLocationIcon style={{color:'green'}}/> 
                    <p>Douala , Cameroun</p>
                 </span>
          
             </div>

               <div className={classes.contact}>
                  <p>Phone</p>
                  <span style={{fontWeight:'bold',display:'flex'}}>
                     <Avatar style={{ backgroundColor:'green'}} >  < PhoneIcon/></Avatar>
                     <p style={{padding:'10px 0px 0px 5px'}}>+237 69887855</p>
                  </span>
               </div>

               <div className={classes.contact}>
                  <p>Email</p>
                  <span style={{fontWeight:'bold',display:'flex'}}>
                     <Avatar style={{ backgroundColor:'green'}} >  < MailIcon/></Avatar>
                     <p style={{padding:'10px 0px 0px 5px'}}>nabilaazeba@gmail.com</p>
                  </span>
               </div>

               <div> <Deroul/> </div>
         </div>   
     
      </Grid>
    </Grid>
    )
}