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

const useStyles = makeStyles({
    main: {
     width:'auto',
     height:'auto',
     margin:'auto',
     borderRadius:'10px',
     display:'flex',
     justifyContent:'space-between',
     marginTop:'40px',
     textAlign:'center',
    },
    root: {
      borderRadius:'10px',
      width:'320px',
      height:'150px',
      alignItems:'center',
      fontFamily: "Times New Roman, Times, serif",
      display:'flex',
      justifyContent:'space-evenly',
      textAlign:'center',
      backgroundColor:'white',
     },
     roote: {
      borderRadius:'10px',
      width:'500px',
      height:'150px',
      alignItems:'center',
      fontFamily: "Times New Roman, Times, serif",
      display:'flex',
      backgroundColor:'white'
     },
  
  });

export default function Main(){
  
   

    const classes = useStyles();

    return(
    <Grid > 

            <Grid container  className={classes.main}>
                 <Grid className={classes.root} >
                       <Avatar style={{ backgroundColor:'green',width:'60px',height:'60px'}} >  < PeopleIcon/></Avatar>
                        <Grid style={{ width:'auto',display:'flex',flexDirection:'column',textAlign:'justify'}}>
                          <Typography style={{fontFamily: "Times New Roman, Times, serif"}} color='textPrimary' > Total Students</Typography>
                          <Typography style={{fontSize:'25px',fontWeight:'bold'}} > 102 </Typography>
                          <Typography style={{fontFamily: "Times New Roman, Times, serif",fontWeight:'bold'}} >
                              <label style={{color:'green'}}>+10%</label> the last Month 
                           </Typography>
                       </Grid>
                  </Grid>

                  <Grid  className={classes.root} >
                       <Avatar style={{ backgroundColor:'rgba(185, 183, 183, 0.829)',width:'60px',height:'60px'}} >  <PersonIcon/></Avatar>
                        <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                          <Typography  > Total Teachers</Typography>
                          <Typography  style={{fontSize:'25px',fontWeight:'bold'}} >730</Typography>
                          <Typography  style={{fontFamily: "Times New Roman, Times, serif",fontWeight:'bold'}} >
                          <label style={{color:'red'}}>+0.5%</label> the last Month
                           </Typography>
                       </Grid>
                  </Grid>

                  <Grid  className={classes.roote} >
                       <Avatar style={{ backgroundColor:'rgba(250, 207, 90, 0.973)',width:'60px',height:'60px'}} >  <SchoolIcon/></Avatar>
                      <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                          <Typography style={{fontFamily: "Times New Roman, Times, serif"}} color='textPrimary' >School Balence</Typography>
                          <Typography  style={{fontSize:'25px',fontWeight:'bold'}} > $125,369</Typography>
                          <Typography  style={{fontFamily: "Times New Roman, Times, serif",fontWeight:'bold'}} >
                          <label style={{color:'green'}}>+23%</label> the last Month
                           </Typography>
                       </Grid>
                  </Grid>

            </Grid>
    </Grid>
    )
}