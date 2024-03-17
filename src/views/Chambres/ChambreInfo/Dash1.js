import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Paper,Button } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import CardMedia from '@mui/material/CardMedia';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
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

export default function Main({selectedData}){
   
    console.log(selectedData)

    const classes = useStyles();

    return(
    <Paper style={{width:'100%' }}> 
 
               
               <Grid container  className={classes.main}>
     
             <CardMedia
             component="img"
             height="220"
             image={selectedData.img}
             alt="Paella dish"
           /> 
       

      
         <div className={classes.root}>
             <div className={classes.spanimage}>
                <span style={{padding:'0px 0px 0px 30px'}}>
                     <img className={classes.img} 
                        src={selectedData.img}
                     />
                  </span> 

               <br></br>
               <br></br>

               <Grid container spacing={2}>
              
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <h1>.</h1>
                  <h1 style={{fontWeight:'bold',color:'#003366'}}>DevteStartup</h1>
                  <h2>Le train du developpement et de l'inovation techonologique . nous somme une agence digital de developpement de logiciel.</h2>
                  <Button variant="contained" style={{backgroundColor:"#003366" ,height:'60px',width:'40%'}} disableElevation>
                      About Us
                  </Button>
                </Grid>
                <Grid item>
                  <p>IMAGE</p>
                </Grid>
              </Grid>
            </Grid>
                 
                  <div style={{paddingLeft:'10px',marginRight:'10px'}}>
                  <p className={classes.name}>
                     CHAMBRE : {selectedData.name} 
                  </p>

                  <p style={{display:'flex',fontWeight:"bold",color:'green',fontSize:"25px"}}> 
                      Categorie : {selectedData.categorie} 
                  </p>
                  <p style={{display:'flex',fontWeight:"bold",color:'green',fontSize:"20px"}}> 
                    Prix  {selectedData.prix} XAF
                  </p>

                 
                        <p>{selectedData.description} </p>
   
                    <p>Autre info</p>

                    <div className={classes.contact}>
                    <p>Lire le cours </p>
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

             
             </div>
              

               
         </div>   
     
      </Grid>
          
    </Paper>
    )
}