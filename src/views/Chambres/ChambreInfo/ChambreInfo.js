import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Paper } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Dash1 from './Dash1'
import Dash2 from './Dash2'




 const useStyles = makeStyles({
    main: {
     width:'100%',
     height:'auto',
     justifyContent:'space-between'
    },
    bloc1: {
      width:'100%',
      backgroundColor:'rgb(17, 141, 65)',
      height:'100px',
      borderRadius:'10px 10px 0px 0px',
     },
     bloc2: {
        width:'100%',
        backgroundColor:'rgb(17, 141, 65)',
        height:'100px',
        borderRadius:'10px 10px 0px 0px',
       },
     
  
  });

 

export default function Main({selectedData,handleCloseChambreInfo}){
  console.log(selectedData)
    const classes = useStyles();
    return(
    <Grid id="detail">
       <span style={{display:'flex'}}>
          <ArrowBackIcon style={{fontSize:'40px',cursor:'pointer'}} onClick={() =>handleCloseChambreInfo(event) }/>
          <Typography variant='h5' style={{padding:'10px 0px 0px 15px',fontSize:'20px',fontWeight:'bold',color:'green'}} >Chambre   {selectedData.name} </Typography>
        </span>
       <Grid  style={{ height: 'auto',margin:'auto', width: "100%",display:"flex",justifyContent:'space-between',flexWrap:'wrap',justifyItems:'center' }}>
        <Grid style={{width:'65%'}}>
             <Dash1 selectedData={selectedData}/>
        </Grid>

        <Grid style={{width:'32%'}}>
            <br></br>
             <Dash2 selectedData={selectedData}/>
        </Grid>
      </Grid>
    </Grid>
    )
}