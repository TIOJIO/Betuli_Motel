import React from 'react'
import {Typography,TextField, Box,Button,Paper} from '@material-ui/core';
import './style.css';


const AddData = ({handleAddFormChange,addFormData,handleAddFormSubmit}) => {
  return (
   <div style={{marginTop:'-130px'}} id="NewClassroom">
   <h1> Create Classroom</h1> 
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
                         onChange={handleAddFormChange}
                         id="classname"  variant="outlined"
                         style={{ width: '100%'}}   
                         type="text"    placeholder='classroom name...'
                       />
   
                      <Typography style={{fontWeight:'bold',}}>  Number of students * </Typography>
                      <TextField
                         onChange={handleAddFormChange}
                         id="maxstudent"  variant="outlined"
                         style={{ width: '100%'}}   
                         type="number"    placeholder=' number...'
                       />
   
                   
   
                    </div>  
   
   
                 <div className='bloc'>
                 <Typography style={{fontWeight:'bold',}}>  Head Teachers </Typography>
                 <TextField
                        onChange={handleAddFormChange}
                        id="headteacher" select
                        style={{ width: '100%'}} 
                        SelectProps={{native: true,}} variant="outlined"
                     >
                     <option style={{opacity:'0.1'}} >head teachers</option>
                     <option > romain junior </option>
                     <option > karl lotin </option>
                     <option > feujio rochinel </option>
                     </TextField>
   
                    
   
                     <Button
                     style={{ backgroundColor:'green',width:'200px',height:'50px',color:'white'}}
                     type='submit' 
                     onClick={() =>handleAddFormSubmit(event) }

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

export default AddData
