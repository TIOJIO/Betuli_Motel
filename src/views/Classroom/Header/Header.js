import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar } from '@material-ui/core';
import Input from './Input';
import Deroul from './Deroul';
import MailIcon from '@material-ui/icons/Mail';




export default function Head(){
     return(

 <div id='aff' style={{marginTop:'-220px'}}>

      <Typography variant='h5' style={{color:'black',fontSize:'30px',fontWeight:'bold',color:'green'}} >Classroom</Typography> 

        <Grid container style={{display:'flex',justifyContent:'space-between',marginTop:'40px'}}>
      
             <Grid  style={{display:'flex'}}>
                 <Input/>         
                  &nbsp;&nbsp; &nbsp;&nbsp;   
            </Grid>

            
       </Grid>

 </div>
     )
}