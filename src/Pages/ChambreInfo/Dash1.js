import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Paper,Button } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import CardMedia from '@mui/material/CardMedia';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import im from '../../assets/img/c1.jpeg';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
import Rating from '@mui/material/Rating';


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

export default function Main({selectedContacts}){
   
    

    const classes = useStyles();

    return(
    <Paper style={{width:'100%' }}> 
     
               
               <Grid container  className={classes.main}>
     
             <CardMedia
             component="img"
             height="220"
             image={selectedContacts.img}
             alt="Paella dish"
           /> 
       

      
         <div className={classes.root}>
             <div className={classes.spanimage}>
                <span style={{padding:'0px 0px 0px 30px'}}>
                     <img className={classes.img} 
                        src={selectedContacts.img}
                     />
                  </span> 

               <br></br>
               <br></br>

               
             <Grid  style={{paddingLeft:'20px',paddingRight:'20px'}} container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <h1 style={{fontWeight:'bold',color:'#003366'}}>CHAMBRE : {selectedContacts.name} </h1>
                  <p style={{display:'flex',fontWeight:"bold",color:'green',fontSize:"25px"}}> 
                      Categorie : {selectedContacts.categorie} 
                  </p>
                </Grid>
                <Grid item>
                  <p style={{fontWeight:"bold",color:'green',fontSize:"20px"}}>{selectedContacts.prix} XAF</p>
                  <p>< AutoStoriesIcon/> x 5</p>
                </Grid>
              </Grid>
            </Grid>  
               <p>{selectedContacts.description} </p>
               <h1>.</h1>

             </div>  
         </div>   
     
      </Grid>
          
    </Paper>
    )
}