
import React from 'react'
import {Typography,TextField, Box,Button,Paper} from '@material-ui/core';
import './style.css';


const AddData = ({handleAddFormChange,addFormData,handleAddFormSubmit,editFormData ,handleEditFormChange ,handleCancelClik,handleEditFormSubmit}) => {
  return (
   <div style={{marginTop:'-30px'}} id="NewClassroom">
   <h1> Update Classroom</h1> 
   <br></br>
            <div className='root'>
               <div className='main'>
                    <div className='texte1'>information</div>
              </div>
           </div>
          
         <Paper>
             <form >       
                <div className='containers'>
                   <div className='bloc'>
                       <Typography style={{fontWeight:'bold',}}> Classroom Name  *</Typography>
                       <TextField
                         value={editFormData.classname}
                         onChange={handleEditFormChange}
                         id="classname"  variant="outlined"
                         style={{ width: '100%'}}   
                         type="text"    placeholder='Type your school name...'
                       />
   
                      <Typography style={{fontWeight:'bold',}}>  Number of students * </Typography>
                      <TextField
                         value={editFormData.maxstudent}
                         onChange={handleEditFormChange}
                         id="maxstudent"  variant="outlined"
                         style={{ width: '100%'}}   
                         type="number"    placeholder='Type your trader number...'
                       />
   
                   
   
                    </div>  
   
   
                 <div className='bloc'>
                 <Typography style={{fontWeight:'bold',}}>  Head Teachers </Typography>
                 <TextField
                        value={editFormData.headteacher}
                        onChange={handleEditFormChange}
                        id="headteacher" select
                        style={{ width: '100%'}} 
                        SelectProps={{native: true,}} variant="outlined"
                     >
                     <option style={{opacity:'0.1'}} >Select school</option>
                     <option > romain junior </option>
                     <option > karl lotin </option>
                     <option > feujio rochinel </option>
                     </TextField>
   
                    
   
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

export default AddData

