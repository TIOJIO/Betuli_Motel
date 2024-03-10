
import React from 'react'
import {Typography,TextField, Box,Button,Paper} from '@material-ui/core';
import './style.css';


const AddData = ({addFormData,handleAddFormSubmit,editFormData ,handleEditFormChange ,handleCancelClik,handleEditFormSubmit}) => {
  return (
   <div style={{marginTop:'-30px'}} id="NewClassroom">

             <form >       
                <div>
                <Typography style={{fontWeight:'bold',}}> Titre</Typography>
                       <TextField
                       value={editFormData.titre}
                         onChange={handleEditFormChange}
                         id="titre"  variant="standard"
                         style={{ width: '100%'}}   
                         type="text"   
                       /><br></br><br></br><br></br>
   

                      <Typography style={{fontWeight:'bold',}}> Trimestre </Typography><br></br>
 
                              <span style={{padding:'30px 0px 10px 10px'}}>
                         <TextField
                             value={editFormData.trimestre}
                             onChange={handleEditFormChange} id="trimestre" select
                             style={{ width: '98%'}} 
                             SelectProps={{native: true,}} variant="standard"
                   
                          >
                           <option >1.Trimestre  </option>
                           <option > 2.Trimestre </option>
                           <option > 3.Trimestre  </option>
                           
                         </TextField>
                    </span>
                         <br></br><br></br>


           <Typography style={{fontWeight:'bold',}}>Sequence</Typography>
                       <TextField
                         value={editFormData.sequence}
                         onChange={handleEditFormChange}
                         id="sequence"  variant="standard"
                         style={{ width: '100%'}}   
                         type="text"    
                       />
<br></br><br></br><br></br><br></br>              <Button
                     style={{ backgroundColor:'green',width:'200px',height:'50px',color:'white'}}
                     type='submit' 
                     onClick={() =>handleEditFormSubmit(event) }

                     > 
                         SAVE
                     </Button> 

                      ;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <Button
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

