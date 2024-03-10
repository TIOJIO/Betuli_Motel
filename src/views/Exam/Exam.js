
import React , { useState,useContext} from 'react'
import axios from 'axios'
import {Typography,Button}  from '@material-ui/core';
import {TextField, Box,Container,Paper} from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import './style.css';
import {useHistory} from 'react-router-dom';




const AddTeacher = () => {

       
  const [data ,setData]= React.useState({
    exam: '' ,
    semestre: '' ,
   
 });

 const handle = (e) =>{
  const  newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)
  console.log(newdata)
};

const history=useHistory(); 
const mySubmiCtHandler = e => {
   e.preventDefault()          

  alert( data.exam+' \n '+data.semestre);
 
}
 return(
<div className='first'>
<h1> Exam</h1> 

         <div className='root'>
            <div className='main'>
                 <div className='texte1'>information</div>
           </div>
        </div>
      <Paper style={{height:'550px'}}>
          <form >       
             <div className='container'>
                <div className='bloc'>
                    <Typography style={{fontWeight:'bold',}}> Exam  *</Typography>
                    <TextField
                      onChange={(e)=> handle(e)}
                      id="exam"  variant="outlined"
                      style={{ width: '100%'}}   
                      type="text"    placeholder='exam name...'
                    />

                 
                 </div>  


              <div className='bloc'>
                 <Typography style={{fontWeight:'bold',}}> Semestre  *</Typography>
                    <TextField
                      onChange={(e)=> handle(e)}
                      id="semestre"  variant="outlined"
                      style={{ width: '100%'}}   
                      type="text"    placeholder='semestre...'
                    />

                  
                  
                 

                  <Button
                  style={{ backgroundColor:'green',width:'200px',height:'50px',color:'white'}}
                  type='submit' 
                  onClick={mySubmiCtHandler}
                  > 
                      SUBMIT
                  </Button> 
              
              </div>

             < div style={{width:'100px',textAlign:"center"}}>
             </div>
        </div>   
     </form>
            <br></br><br></br>
   </Paper>
</div>
   


   )
  }


export default AddTeacher;