import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Paper } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import CardMedia from '@mui/material/CardMedia';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import im from '../../assets/img/c1.jpeg';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';



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
      backgroundColor:'rgb(17, 141, 65)',
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
       flexWrap:'wrap'
   },
   contact: {
      marginTop:'10px',
   },
   name: {
      fontWeight:'bold',
      fontSize:'30px'
   },
  
  });

export default function Main({}){
   
    const imagePath ="https://www.djangui.net/media/mysalary/";

    const classes = useStyles();

    return(
    <Paper style={{width:'100%' }}> 
      <Grid container  className={classes.main}>
     
             <CardMedia
             component="img"
             height="220"
             image={im}
             alt="Paella dish"
           /> 
       

      
         <div className={classes.root}>
             <div className={classes.spanimage}>
                <span style={{padding:'0px 0px 0px 30px'}}>
                     <img className={classes.img} 
                        src={im}
                     />
                  </span> 

               <br></br>
               <br></br>
                 <p className={classes.name}>
                     description 
                  </p>

                  <p style={{display:'flex',fontWeight:"bold",color:'green',fontSize:"25px"}}> 
                      Date 
                  </p>
                  <p style={{display:'flex',fontWeight:"bold",color:'green',fontSize:"20px"}}> 
                     Bien Lire ce fichier !!
                  </p>

                    <p> Autre info </p>
                    <p>Autre info</p>
          
             </div>

             <div className={classes.contact}>
                    <p>Lire le cour </p>
                    <span style={{fontWeight:'bold',display:'flex',flexWrap:'wrap'}}>
                         <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  < AutoStoriesIcon/></Avatar>
                    </span>
                 </div>
  
                 <div className={classes.contact}>
                    <p>Bon Travail</p>
                    <span style={{fontWeight:'bold',display:'flex',flexWrap:'wrap'}}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  < SchoolIcon/></Avatar>
                    </span>
             </div>
              

               
         </div>   
     
      </Grid>
    </Paper>
    )
}