import React , { useState,useContext} from 'react'
import axios from 'axios'
import {Typography,Button}  from '@material-ui/core';
import {TextField, Box,Container,Paper} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './style.css';


const AddData = ({addFormData,handleAddFormSubmit,editFormData ,handleEditFormChange ,handleCancelClik,handleEditFormSubmit}) => {
  return (
<div style={{marginTop:'-180px'}} id='NewTeachers'>

<div>
<Typography style={{color:'transparent'}}> P</Typography>
<Typography style={{color:'transparent'}}> P</Typography>
    <h1> Update Coures</h1> 
    <br></br>
 <div className='root'>
    <div className='main'>
         <div className='texte'> Detailes</div>
   </div>
</div>
<Paper>
  <form >       
     <div className='container'>
        <div className='bloc'>
            <Typography style={{fontWeight:'bold',}}> Subject *</Typography>
            <TextField
               value={editFormData.subject}
               onChange={handleEditFormChange}   
               id="subject"  variant="outlined"
               style={{  width: '100%'}}  
              type="text"   placeholder='Subject...'
            />

           <Typography style={{fontWeight:'bold',}}>  Chapters * </Typography>
           <TextField
              value={editFormData.chapter}
              onChange={handleEditFormChange}
              id="chapter"  variant="outlined"
              style={{ width: '100%'}}   
              type="number"    placeholder='Chapters...'
            />

          <Typography style={{fontWeight:'bold',}}>  Classroom * </Typography>
             <TextField
                     value={editFormData.classroom}
                     onChange={handleEditFormChange}
                     id="classroom" select
                   style={{ width: '100%'}} 
                     SelectProps={{native: true,}} variant="outlined"
             >
                     <option style={{opacity:'0.1'}} >Select class</option>
                     <option > Tle A </option>
                     <option > Tle C </option>
                     <option > Tle D </option>
              </TextField>
         </div>  

      <div className='bloc'>
         <Typography style={{fontWeight:'bold',}}>Taught In * </Typography>
             <TextField
                        value={editFormData.taughtin}
                        onChange={handleEditFormChange}
                        id="taughtin" select
                        style={{ width: '100%'}} 
                        SelectProps={{native: true,}} variant="outlined"
                     >
                     <option style={{opacity:'0.1'}} >Select Taught in</option>
                     <option > SIL </option>
                     <option > CE2 </option>
                     <option > CM1 </option>
            </TextField>
        
         <Typography style={{fontWeight:'bold',}}>  Rating * </Typography>
         <TextField
           value={editFormData.rating}
           onChange={handleEditFormChange}
           id="rating"  variant="outlined"
           style={{  width: '100%'}}  
           type="number"   placeholder='Rating...'
          />

         <Button
          style={{ backgroundColor:'green',width:'100px',color:'white'}}
          type='submit' 
          onClick={() =>handleEditFormSubmit(event) }

          > 
              SAVE
          </Button> 

           &nbsp;&nbsp;&nbsp;
          <Button
          style={{ backgroundColor:'green',width:'100px',color:'white'}}
          type='submit' 
          onClick={() =>handleCancelClik(event) }

          > 
              CANCEL
          </Button> 
        
      </div>

     < div style={{width:'100px'}}>
     </div>
</div>   
</form>
    <br></br><br></br>
</Paper>
</div>
<br></br><br></br>


</div>

  )
}

export default AddData

