import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Divider } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import Add from '@material-ui/icons/Add';
import Input from "./Elements/Input"
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

                      <br></br> 
                         <Grid style={{padding:'20px 0px 20px 40px'}}>
                             <Typography style={{fontWeight:'bold',fontSize:'20px'}} >Message</Typography>
                       </Grid>

                      <Grid style={{margin:'auto',width:'85%'}}>
                          <Input />
                      </Grid>
                      <br></br><br></br>
                       

                       <Grid  container className={classes.bloc}>
                           <Grid style={{display:'flex',}}>
                              <Avatar style={{ backgroundColor:'green'}} ><img style={{width:'40px'}} src={logo1}/></Avatar>
                              <span style={{display:'flex',flexDirection:'column',textAlign:'justify',padding:'0px 0px 0px 15px'}}>
                                 <Typography style={{fontWeight:'bold'}} >samathan pamela</Typography>
                                  <Typography color='textPrimary' >cross a 8h</Typography>
                              </span>
                          </Grid>
                              <span>
                                 <p>10:00 PM</p>
                                 <Avatar style={{ backgroundColor:'green',float:'right',width:'20px',height:'20px'}} >2</Avatar>
                           </span>
                     </Grid>

                     
                      
                       <Grid  container className={classes.bloc}>
                           <Grid style={{display:'flex',}}>
                              <Avatar style={{ backgroundColor:'green'}} ><img style={{width:'40px'}} src={logo1}/></Avatar>
                              <span style={{display:'flex',flexDirection:'column',textAlign:'justify',padding:'0px 0px 0px 15px'}}>
                                 <Typography style={{fontWeight:'bold'}} >samathan pamela</Typography>
                                  <Typography color='textPrimary' >bonjour paul</Typography>
                              </span>
                          </Grid>
                           
                           <span>
                              <p>12:45 PM</p>
                              <Avatar style={{ backgroundColor:'green',float:'right',width:'20px',height:'20px'}} >  1</Avatar>
                           </span>
                       </Grid>


                       <Grid  container className={classes.bloc}>
                           <Grid style={{display:'flex',}}>
                              <Avatar style={{ backgroundColor:'green'}} ><img style={{width:'40px'}} src={logo1}/></Avatar>
                              <span style={{display:'flex',flexDirection:'column',textAlign:'justify',padding:'0px 0px 0px 15px'}}>
                                 <Typography style={{fontWeight:'bold'}} >samathan pamela</Typography>
                                  <Typography color='textPrimary' >salut a vous ..</Typography>
                              </span>
                          </Grid>
                             <span>
                               <p>12:45 PM</p>
                           </span>
                       </Grid>


                       <Grid  container className={classes.bloc}>
                           <Grid style={{display:'flex',}}>
                              <Avatar style={{ backgroundColor:'green'}} ><img style={{width:'40px'}} src={logo1}/></Avatar>
                              <span style={{display:'flex',flexDirection:'column',textAlign:'justify',padding:'0px 0px 0px 15px'}}>
                                 <Typography style={{fontWeight:'bold'}} >samathan pamela</Typography>
                                  <Typography color='textPrimary' >ouim cross</Typography>
                              </span>
                          </Grid>
                            <span>
                                <p>06:25 PM</p>
                                <Avatar style={{ backgroundColor:'green',float:'right',width:'20px',height:'20px'}} >  1</Avatar>
                           </span>   
                   </Grid>



                       <Grid  container className={classes.bloc}>
                           <Grid style={{display:'flex',}}>
                              <Avatar style={{ backgroundColor:'green'}} ><img style={{width:'40px'}} src={logo1}/></Avatar>
                              <span style={{display:'flex',flexDirection:'column',textAlign:'justify',padding:'0px 0px 0px 15px'}}>
                                 <Typography style={{fontWeight:'bold'}} >samathan pamela</Typography>
                                  <Typography color='textPrimary' >youe are</Typography>
                              </span>
                          </Grid>
                             <span>
                                <p>12:45 PM</p>
                                <Avatar style={{ backgroundColor:'green',float:'right',width:'20px',height:'20px'}} > 3</Avatar>
                            </span>
                  </Grid>
                      



            </Grid>
    </Grid>
    )
}