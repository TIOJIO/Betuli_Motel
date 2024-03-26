
import React , { useState,useContext} from 'react'
import axios from 'axios'
import {Typography,Button}  from '@material-ui/core';
import {TextField, Box,Container,Paper} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import { Switch } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import './style.css';



const AddData = ({viewImage,handleMouseDownPassword,handleClickShowPassword,handleChange,handleAddFormChange,addFormData,handleAddFormSubmits,onImageChange}) => {
  return (
<div style={{marginTop:'-180px'}} id='NewTeachers'>

<div>
<Typography style={{color:'transparent'}}> P</Typography>
<Typography style={{color:'transparent'}}> P</Typography>
    <h1> Add New Teachers</h1> 
    <br></br>
 <div className='root'>
    <div className='main'>
         <div className='texte'> Detailes Sur la chambre</div>
   </div>
</div>
<Paper>
  <form >       
     <div className='container'>
        <div className='bloc'>
                <Typography style={{fontWeight:'bold',}}>  photo * </Typography>
                <div style={{padding:'5px 55px 0px 0px'}}>
                  <div component="span" style={{width:'300px',height:'200px', border: '1px dashed grey',borderRadius:'10px',textAlign:'center',alignItems:'center'}}>
                  <img style={{width:'100%' ,height:'195px',borderRadius:'10px'}} src={viewImage} />
                  </div>
                  <input style={{color:'white' ,padding:'10px 0px 0px 60px'}}   type="file" id='img' name="myImage"  onChange={onImageChange} />
               </div>

         </div>  

      <div className='bloc'>
      <Typography style={{fontWeight:'bold',}}>Nom</Typography>
            <TextField
               onChange={handleAddFormChange}   
               id="name"  variant="outlined"
               style={{  width: '100%'}}  
              type="text"   placeholder='nom...'
            />

         <Typography style={{fontWeight:'bold',}}>categorie </Typography>
         <TextField
           onChange={handleAddFormChange}
           SelectProps={{native: true,}} 
           select
           id="categorie"  variant="outlined"
           style={{  width: '100%'}}  
           type="text"   placeholder='Last Name...'
          >
           <option value='Climatisée'> categorie... </option>
           <option value='Climatisée'> Climatisée </option>
           <option value='Climatisée'> Ventillée </option>
          </TextField>
          

          <Typography style={{fontWeight:'bold',}}>  Prix(XAF) </Typography>
           <TextField
              onChange={handleAddFormChange}
              id="prix"  variant="outlined"
              style={{ width: '100%'}}   
              type="number"    placeholder='prix...'
            />
         
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
               onChange={handleAddFormChange}   
               id="personn"  variant="outlined"
               style={{  width: '100%'}}  
              type="number"   placeholder='companys code...'
            />

           <Typography style={{fontWeight:'bold',}}>Description </Typography>
               <textarea  onChange={handleAddFormChange}  id='description' style={{width:'100%'}}>
               </textarea>


         </div>  

      <div className='bloc'>
         <Typography style={{fontWeight:'bold',}}>Préference </Typography>
        
         <TextField
           onChange={handleAddFormChange}
           id="Username"  variant="outlined"
           style={{  width: '100%'}}  
           type="text"   placeholder='Username...'
          />

         <Typography style={{fontWeight:'bold',}}>Disponibilité </Typography>
           <div style={{display:'flex'}}>
              <div>
                 <input value="checked" type='checkbox'/>
                 <label>Disponible</label>
              </div>

              <div>
                 <input type='checkbox'/>
                 <label>Non disponible</label>
              </div>
           </div>
          
          <br></br>
          <Button
          style={{ backgroundColor:'green',width:'170px',height:'50px',color:'white'}}
          type='submit' 
          onClick={(event) =>handleAddFormSubmits(event) }
          > 
              ENREGISTRER
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
