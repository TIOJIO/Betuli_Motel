
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


const AddData = ({values,handleMouseDownPassword,handleClickShowPassword,handleChange,handleAddFormChange,addFormData,handleAddFormSubmit,onImageChange}) => {
  return (
<div style={{marginTop:'-180px'}} id='NewTeachers'>

<div>
<Typography style={{color:'transparent'}}> P</Typography>
<Typography style={{color:'transparent'}}> P</Typography>
    <h1> Add New Teachers</h1> 
    <br></br>
 <div className='root'>
    <div className='main'>
         <div className='texte'>Personal Detailes</div>
   </div>
</div>
<Paper>
  <form >       
     <div className='container'>
        <div className='bloc'>
            <Typography style={{fontWeight:'bold',}}> First Name *</Typography>
            <TextField
               onChange={handleAddFormChange}   
               id="firstnames"  variant="outlined"
               style={{  width: '100%'}}  
              type="text"   placeholder='First Name...'
            />

           <Typography style={{fontWeight:'bold',}}>  Phone </Typography>
           <TextField
              onChange={handleAddFormChange}
              id="phone"  variant="outlined"
              style={{ width: '100%'}}   
              type="text"    placeholder='Phone...'
            />
         </div>  

      <div className='bloc'>
         <Typography style={{fontWeight:'bold',}}>Last Name * </Typography>
         <TextField
           onChange={handleAddFormChange}
           id="lastname"  variant="outlined"
           style={{  width: '100%'}}  
           type="text"   placeholder='Last Name...'
          />
        
         <Typography style={{fontWeight:'bold',}}>  photo * </Typography>
        <div style={{marginTop:'30px'}}>
               <Box component="span" sx={{ p: 7,width:'10px', border: '1px dashed grey'}}>
               <img style={{width:'100px'}} src={addFormData.profile} />
               </Box>

               <input className='profil'  type="file" id='image' name="myImage"  onChange={onImageChange} />
         </div>
      </div>

     < div style={{width:'100px'}}>
     </div>
</div>   
</form>
    <br></br><br></br>
</Paper>
</div>
<br></br><br></br>



<div>
 <div className='root'>
    <div className='main'>
         <div className='texte'>Login's Credentials</div>
   </div>
</div>
<Paper>
  <form >       
     <div className='container'>
        <div className='bloc'>
            <Typography style={{fontWeight:'bold',}}> Company's Code *</Typography>
            <TextField
               onChange={handleAddFormChange}   
               id="companycode"  variant="outlined"
               style={{  width: '100%'}}  
              type="text"   placeholder='companys code...'
            />

           <Typography style={{fontWeight:'bold',}}>  Password * </Typography>
 <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
  <InputLabel htmlFor="outlined-adornment-password">Password..</InputLabel>
  <OutlinedInput
    id="outlined-adornment-password"
    type={values.showPassword ? 'text' : 'password'}
    value={values.password}
    onChange={handleChange('password') }
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {values.showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
    label="Password"
  />
</FormControl>


         </div>  

      <div className='bloc'>
         <Typography style={{fontWeight:'bold',}}> Username * </Typography>
         <TextField
           onChange={handleAddFormChange}
           id="Username"  variant="outlined"
           style={{  width: '100%'}}  
           type="text"   placeholder='Username...'
          />
          
          <Button
          style={{ backgroundColor:'green',width:'100px',color:'white'}}
          type='submit' 
          onClick={() =>handleAddFormSubmit(event) }

          > 
              SAVE
          </Button> 
      
      </div>

     < div style={{width:'100px',textAlign:"center"}}>
     </div>
</div>   
</form>
    <br></br><br></br>
</Paper>
</div>

</div>

  )
}

export default AddData
