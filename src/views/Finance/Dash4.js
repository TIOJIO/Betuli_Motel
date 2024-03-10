import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Divider } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Deroul from './Elements/Deroul';
import Add from '@material-ui/icons/Add';
import logo1 from './Elements/img1.jpg';





const useStyles = makeStyles({
    main: {
     width:'100%',
     backgroundColor:'white',
     height:'100%',
     margin:'auto',
     borderRadius:'10px',
     display:'flex',
     flexDirection:'column'
    },
    bloc: {
      display:'flex',
      width:'100%',
      justifyContent:'space-evenly',
      padding:'0px 0px 35px 0px',
      cursor: 'pointer',
    
     },
  
  });

export default function Main(){
    const classes = useStyles();

    return(
    <Grid > 

            <Grid container  className={classes.main}>
                

                      
                         <Grid  container >
                             <Grid style={{padding:'25px 0px 25px 150px'}}>
                             <Typography variant='h6' style={{fontWeight:'bold'}} >Unpaid Student intuition</Typography>
                       </Grid>
                       </Grid>

                     
                 <Grid  container className={classes.bloc}>
                     <Grid style={{display:'flex'}}>
                             <Avatar style={{ backgroundColor:'red'}} >  <TrendingUpIcon style={{color:'white',}}/></Avatar> 
                            &nbsp;&nbsp;&nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}> 
                             <Typography style={{fontWeight:'bold'}} >#123456789</Typography>
                            <Typography color='textPrimary' >02 March 2021 12:30</Typography>
                            </Grid>
                     </Grid>
                       <Typography style={{fontWeight:'bold'}} >$ 50.023</Typography>
                       <Typography style={{fontWeight:'bold',color:'green'}} >complet</Typography>
                       </Grid>


                                
                 <Grid  container className={classes.bloc}>

                     <Grid style={{display:'flex'}}>
                             <Avatar style={{ backgroundColor:'red'}} >  <TrendingUpIcon style={{color:'white',}}/></Avatar> 
                            &nbsp;&nbsp;&nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}> 
                             <Typography style={{fontWeight:'bold'}} >#456987123</Typography>
                            <Typography color='textPrimary' >02 Avril 2021 12:30</Typography>
                            </Grid>
                     </Grid>
                       <Typography style={{fontWeight:'bold'}} >$ 50.023</Typography>
                       <Typography style={{fontWeight:'bold',color:'green'}} >complet</Typography>
                       </Grid>


                                
                 <Grid  container className={classes.bloc}>

                     <Grid style={{display:'flex'}}>
                             <Avatar style={{ backgroundColor:'red'}} >  <TrendingUpIcon style={{color:'white',}}/></Avatar> 
                            &nbsp;&nbsp;&nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}> 
                             <Typography style={{fontWeight:'bold'}} >#254136987</Typography>
                            <Typography color='textPrimary' >02 March 2021 12:30</Typography>
                            </Grid>
                     </Grid>
                       <Typography style={{fontWeight:'bold'}} >$ 50.023</Typography>
                       <Typography style={{fontWeight:'bold',color:'green'}} >complet</Typography>
                       </Grid>


                                
                 <Grid  container className={classes.bloc}>

                     <Grid style={{display:'flex'}}>
                             <Avatar style={{ backgroundColor:'red'}} >  <TrendingUpIcon style={{color:'white',}}/></Avatar> 
                            &nbsp;&nbsp;&nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}> 
                             <Typography style={{fontWeight:'bold'}} >398547123</Typography>
                            <Typography color='textPrimary' >02 jully 2021 12:30</Typography>
                            </Grid>
                     </Grid>
                       <Typography style={{fontWeight:'bold'}} >$ 50.023</Typography>
                       <Typography style={{fontWeight:'bold',color:'green'}} >complet</Typography>
                       </Grid>


                                
                       <Grid  container className={classes.bloc}>

                     <Grid style={{display:'flex'}}>
                             <Avatar style={{ backgroundColor:'red'}} >  <TrendingUpIcon style={{color:'white',}}/></Avatar> 
                            &nbsp;&nbsp;&nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}> 
                             <Typography style={{fontWeight:'bold'}} >#32145879</Typography>
                            <Typography color='textPrimary' >02 March 2021 12:30</Typography>
                            </Grid>
                     </Grid>
                       <Typography style={{fontWeight:'bold'}} >$ 50.023</Typography>
                       <Typography style={{fontWeight:'bold',color:'green'}} >complet</Typography>
                       </Grid>


                       



            </Grid>
    </Grid>
    )
}