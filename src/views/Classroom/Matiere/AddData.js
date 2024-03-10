import React from 'react'
import {Typography,TextField, Box,Button,Paper} from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './style.css';


const AddData = ({handleAddFormChange,addFormData,handleAddFormSubmit}) => {
  return (
   <div style={{marginTop:'-30px'}} id="NewClassroom">

             <form >       
                <div>
                       <Typography style={{fontWeight:'bold',}}> Nom matiere  *</Typography>
                       <TextField
                         onChange={handleAddFormChange}
                         id="matiere"  variant="standard"
                         style={{ width: '100%'}}   
                         type="text"    placeholder='Nom de la matiere...'
                       /><br></br><br></br><br></br>
   

                      <Typography style={{fontWeight:'bold',}}> Selectionner le jour et l'heure </Typography><br></br>
                      <div style={{border:'1px solid black',width:'100%',height:'auto',borderRadius:'20px'}}>
                             <span style={{padding:'30px 0px 10px 10px'}}>
                         <TextField
                             onChange={handleAddFormChange} id="jour" select
                             style={{ width: '98%'}} 
                             SelectProps={{native: true,}} variant="standard"
                            label=" select"
                          >
                            <option ></option>
                           <option > LUNDI </option>
                           <option > MARDI </option>
                           <option > MERCREDI  </option>
                           <option > JEUDI  </option>
                           <option > VENDREDI  </option>
                         </TextField>
                    </span>
                         </div><br></br><br></br>


       <div style={{display:'flex',width:'100%'}}>
           <span style={{width:'100%'}}>
           <Typography style={{fontWeight:'bold',}}>Debut</Typography>
                       <TextField
                         onChange={handleAddFormChange}
                         id="heuredebut"  variant="standard"
                         style={{ width: '100%'}}   
                         type="time"    
                       />
           </span>&nbsp;&nbsp;
           <span style={{width:'100%'}}>
           <Typography style={{fontWeight:'bold',}}> Fin</Typography>
                       <TextField
                         onChange={handleAddFormChange}
                         id="heurefin"  variant="standard"
                         style={{ width: '100%'}}   
                         type="time"    
                       />
           </span>
       </div><br></br><br></br>


                      
                     <Button
                     style={{ backgroundColor:'green',width:'200px',height:'50px',color:'white'}}
                     type='submit' 
                     onClick={() =>handleAddFormSubmit(event) }

                     > 
                         Enregistrer
                     </Button> 
                 
   
                < div style={{width:'100px',textAlign:"center"}}>
                </div>
           </div>   
        </form>
               <br></br><br></br>
   </div>

  )
}

export default AddData
