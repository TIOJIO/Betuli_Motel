
import React , { useState,useContext} from 'react'
import axios from 'axios'
import {Typography,Button}  from '@material-ui/core';
import {TextField, Box,Container,Paper} from '@material-ui/core';
import { Switch } from '@mui/material';

import './style.css';


const AddData = ({values,handleMouseDownPassword,handleClickShowPassword,handleChange,addFormData,onImageChangeEdit,editFormData ,handleEditFormChange ,handleCancelClik,handleEditFormSubmit}) => {
  return (
<div style={{marginTop:'-180px'}} id='NewTeachers'>

<div>
<Typography style={{color:'transparent'}}> P</Typography>
<Typography style={{color:'transparent'}}> P</Typography>
    <h1> Mettre a jour la chambre</h1> 
    <br></br>
 <div className='root'>
    <div className='main'>
         <div className='texte'>Detailes Sur la chambre</div>
   </div>
</div>
<Paper>
  <form >       
     <div className='container'>
        <div className='bloc'>
            <Typography style={{fontWeight:'bold',}}> Nom</Typography>
            <TextField
               value={editFormData.name}
               onChange={handleEditFormChange}   
               id="name"  variant="outlined"
               style={{  width: '100%'}}  
              type="text"   placeholder='nom...'
            />

           <Typography style={{fontWeight:'bold',}}>   Prix(XAF) </Typography>
           <TextField
              value={editFormData.prix}
               onChange={handleEditFormChange}
              id="prix"  variant="outlined"
              style={{ width: '100%'}}   
              type="number"    placeholder='prix...'
            />
         </div>  

      <div className='bloc'>
         <Typography style={{fontWeight:'bold',}}>categorie </Typography>
         <TextField
           onChange={handleEditFormChange}
           SelectProps={{native: true,}} 
           select
           id="categorie"  variant="outlined"
           style={{  width: '100%'}}  
           type="text"   placeholder='Last Name...'
          >
           <option  value={editFormData.categorie}>{editFormData.categorie} </option>
           <option value='Climatisée'> Climatisée </option>
           <option value='Climatisée'> Ventillée </option>
          </TextField>
        
         <Typography style={{fontWeight:'bold',}}>  photo * </Typography>
        <div style={{marginTop:'30px'}}>
               <Box component="span" sx={{ p: 7,width:'10px', border: '1px dashed grey'}}>
               <img style={{width:'100px'}} src={editFormData.img} />
               </Box>

               <input className='profil'  type="file" id='img' name="myImage"  onChange={onImageChangeEdit} />
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
         <div className='texte'>Autres Informations</div>
   </div>
</div>
<Paper>
  <form >       
     <div className='container'>
        <div className='bloc'>
            <Typography style={{fontWeight:'bold',}}>Nombre personne maximum</Typography>
            <TextField
               value={editFormData.personn}
               onChange={handleEditFormChange}   
               id="personn"  variant="outlined"
               style={{  width: '100%'}}  
              type="number"   placeholder='personne...'
            />

           <Typography style={{fontWeight:'bold',}}>  Password * </Typography>
           <textarea  value={editFormData.description} onChange={handleEditFormChange}  id='description' style={{width:'100%'}}>
               </textarea>


         </div>  

      <div className='bloc'>
         <Typography style={{fontWeight:'bold',}}> Préference </Typography>
         <TextField
           value={editFormData.Username}
         onChange={handleEditFormChange}
           id="Username"  variant="outlined"
           style={{  width: '100%'}}  
           type="text"   placeholder='Username...'
          />

          <Typography style={{fontWeight:'bold',}}>Disponibilité </Typography>
         <Switch/>
          
          <br></br>
          
          <Button
          style={{ backgroundColor:'green',width:'100px',color:'white'}}
          type='submit' 
          onClick={() =>handleEditFormSubmit(event) }

          > 
              SAVE
          </Button>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
          style={{ backgroundColor:'green',width:'100px',color:'white'}}
          type='submit' 
          onClick={() =>handleCancelClik(event) }

          > 
              CANCEL
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




