
import React from 'react'
import {Typography,TextField, Box,Button,Paper} from '@material-ui/core';
import './style.css';


const AddData = ({addFormData,handleAddFormSubmit,editFormData ,handleEditFormChange ,handleCancelClik,handleEditFormSubmit}) => {
  return (
   <div style={{marginTop:'-30px'}} id="NewClassroom">

             <form >       
                <div>
                       <Typography style={{fontWeight:'bold',}}> Nom matiere  *</Typography>
                       <TextField
                         value={editFormData.matiere}
                         onChange={handleEditFormChange}
                         id="matiere"  variant="standard"
                         style={{ width: '100%'}}   
                         type="text"    placeholder='Nom de la matiere...'
                       /><br></br><br></br><br></br>
   

                      <Typography style={{fontWeight:'bold',}}> Selectionner le jour et l'heure </Typography><br></br>
                      <div style={{border:'1px solid black',width:'100%',height:'auto',borderRadius:'20px'}}>
                             <span style={{padding:'30px 0px 10px 10px'}}>
                         <TextField
                             value={editFormData.jour}
                             onChange={handleEditFormChange}
                             id="jour" select
                             style={{ width: '98%'}} 
                             SelectProps={{native: true,}} variant="standard"
                            label=" select"
                          >
                            <option ></option>
                           <option > lundi </option>
                           <option > Mardi </option>
                           <option > Mercredi  </option>
                           <option > Jeudi  </option>
                           <option > Vendredi  </option>
                         </TextField>
                    </span>
                         </div><br></br><br></br>


       <div style={{display:'flex',width:'100%'}}>
           <span style={{width:'100%'}}>
           <Typography style={{fontWeight:'bold',}}>Debut</Typography>
                       <TextField
                         value={editFormData.heuredebut}
                         onChange={handleEditFormChange}
                         id="heuredebut"  variant="standard"
                         style={{ width: '100%'}}   
                         type="time"    
                       />
           </span>&nbsp;&nbsp;
           <span style={{width:'100%'}}>
           <Typography style={{fontWeight:'bold',}}> Fin</Typography>
                       <TextField
                         value={editFormData.heurefin}
                         onChange={handleEditFormChange}
                         id="heurefin"  variant="standard"
                         style={{ width: '100%'}}   
                         type="time"    
                       />
           </span>
       </div><br></br><br></br>


              <Button
                     style={{ backgroundColor:'green',width:'200px',height:'50px',color:'white'}}
                     type='submit' 
                     onClick={() =>handleEditFormSubmit(event) }

                     > 
                         SAVE
                     </Button> 

                       &nbsp;&nbsp;&nbsp;&nbsp;
                     <Button
                     style={{ backgroundColor:'green',width:'200px',height:'50px',color:'white'}}
                     type='submit' 
                     onClick={() =>handleCancelClik(event) }

                     > 
                         CANCEL
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

