import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Button } from '@material-ui/core';
import Activity from './Elements/Activity';
import Deroul from './Elements/Deroul';
import MailIcon from '@material-ui/icons/Mail';
import Add from '@material-ui/icons/Add';
import logo from './img.jpg';
import logo1 from './img1.jpg';
import logo2 from './img2.jpg';
import logo3 from './img3.jpg';
import logo4 from './img4.jpg';
import logo5 from './img6.jpg';




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
      width:'95%',
      height:'auto',
      dispaly:'flex',
      justifyContent:'space-around',
      backgroundColor:'green',
      margin:'auto',
      borderRadius:'10px 10px 0px 10px',
      color:'white'
     },
  
  });

export default function Main(){
    const classes = useStyles();

    return(
    <Grid > 

            <Grid container  className={classes.main}>


                      <br></br> <br></br> <br></br> <br></br> <br></br>

                  <Grid  container className={classes.bloc}>
                  
                       <div style={{padding:'15px 0px 0px 20px'}}>
                          <p>your plan</p>
                          <p style={{fontWeight:'bold',fontSize:'30px'}}>Free</p>
                          <p>. 50 Go storage</p>
                          <p>. limited facture</p>
                          <Typography>upgrade the prenuim plan to get more</Typography>
                          <Typography>facture & storage memory</Typography>

                          <br></br>
                          <button style={{width:'150px',height:'40px',backgroundColor:'white',borderRadius:'10px',border:'1px solid white'}}>upgrade Plan</button>
                          <br></br><br></br>

                       </div>
                       <br></br><br></br><br></br>
                       <Deroul/>
                   </Grid>

                     <div style={{padding:'20px 0px 0px 10px'}}>
                        <p style={{fontWeight:'bold',fontSize:'20px',color:'black'}}>Laster Activity</p>
                        <Activity/>
                     </div>

                   
            </Grid>
    </Grid>
    )
}