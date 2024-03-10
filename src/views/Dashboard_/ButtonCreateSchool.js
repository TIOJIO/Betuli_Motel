
import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Container,Paper, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';



 class Views extends React.Component {
      render(){
       return(
        <Link to="../CreateSchool/CreateSchool"><div style={{backgroundColor:'green',textDecoration:'none',display:'flex',width:'200px',borderRadius:'20px'}}  > 
        &nbsp;<Typography style={{fontFamily: "Times New Roman, Times, serif",color:'white',textDecoration:'none',justifyContent:'center',margin:'10px 20px 10px 20px'}}> + New Student </Typography>
           </div> </Link>


       )
     }
    }

 export default Views;


















