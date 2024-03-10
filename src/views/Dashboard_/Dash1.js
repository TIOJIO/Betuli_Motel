import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Paper } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import Header from './Header/Header'
import { Link } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Person3Icon from '@mui/icons-material/Person3';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddIcon from '@mui/icons-material/Add';


const useStyles = makeStyles({
    main: {
     flexWrap:'wrap',
     width:'100%',
     height:'auto',
     margin:'auto',
     justifyContent:'space-between',
     marginTop:'20px',
     padding:'5% 0% 3% 0%'
    
     
    },
    block:{
      width:'30%',
      height:'auto',
      borderRadius:'10px',
      backgroundColor:'white',
      fontFamily: "Times New Roman, Times, serif",
      padding:'2% 0% 2% 3%'
    },
    blockitem:{
      flexWrap:'wrap',
      width:'100%',
      height:'auto',
      borderRadius:'10px',
      fontFamily: "Times New Roman, Times, serif",
      display:'flex',
      justifyContent:'space-evenly',
   },
   blockitem1:{
      width:'75%',
      borderRadius:'10px',
      fontFamily: "Times New Roman, Times, serif",
      display:'flex',
      justifyContent:'space-evenly',
   }
  
  });

export default function Main(){
  
   

    const classes = useStyles();

    return(
    <Grid > 

            <Grid container spacing={3} className={classes.main}>
                 <Grid item xs={12} sm={6} md={3} className={classes.block}>
                      <Grid className={classes.blockitem1} >
                          <MonetizationOnIcon sx={{ fontSize: 40 , color:'orange'}} />
                          <Typography  color='textPrimary' >Total reverse</Typography>
                      </Grid>
                      <Grid className={classes.blockitem} >
                          <Typography variant='h6' > 102,25XAF </Typography>
                          <Typography  style={{color:'red'}}> <TrendingDownIcon/> -15%</Typography>
                      </Grid>
                  </Grid>

                  <Grid className={classes.block}>
                      <Grid className={classes.blockitem1} >
                          <AccountBoxIcon sx={{ fontSize: 40 , color:'green'}} />
                          <Typography  color='textPrimary' >Total Eleve </Typography>
                      </Grid>
                      <Grid className={classes.blockitem} >
                          <Typography variant='h6' > 5846 </Typography>
                          <Typography  style={{color:'green',fontWeight:'bold'}}>+15</Typography>
                      </Grid>
                  </Grid>

                  <Grid className={classes.block}>
                      <Grid className={classes.blockitem1} >
                          <AccountBalanceWalletIcon sx={{ fontSize: 40 , color:'#993300'}} />
                          <Typography  color='textPrimary' > Transaction</Typography>
                      </Grid>
                      <Grid className={classes.blockitem} >
                          <Typography variant='h6' > 502,25XAF </Typography>
                          <Typography  style={{color:'green'}}> <TrendingUpIcon/> 55%</Typography>
                      </Grid>
                  </Grid>

            </Grid>
    </Grid>
    )
}