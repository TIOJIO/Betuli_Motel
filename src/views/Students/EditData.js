
import React from 'react'
import {Typography,TextField, Box,Button,Paper} from '@material-ui/core';
import './style.css';


const AddData = ({handleAddFormChange,addFormData,handleAddFormSubmit,onImageChange,editFormData ,handleEditFormChange ,handleCancelClik,handleEditFormSubmit}) => {
  return (
    <div style={{marginTop:'-180px'}} id='NewStudents'>
    <div>
    <Typography style={{color:'transparent'}}> P</Typography>
    <Typography style={{color:'transparent'}}> P</Typography>
        <h1 > Update Students</h1> <br></br>
     <div className='root'>
        <div className='main'>
             <div className='texte'>Students Details</div>
       </div>
    </div>
  <Paper>  
         <div className='container'>
           <div className='bloc1'>
               <Typography style={{fontWeight:'bold',}}> Photo *</Typography>
                 <div style={{padding:'60px 50px 0px 0px'}}>
                   <Box component="span" sx={{ p: 7,width:'10px', border: '1px dashed grey'}}>
                   <img style={{width:'50px'}} src={addFormData.profile}  />
                   </Box>
                   <input className='profil1'  type="file"  id='image'  name="myImage"  onChange={onImageChange} />
                  </div>
             </div>
    
              <div className='bloc'>
                <Typography style={{fontWeight:'bold',}}> First Name *</Typography>
                <TextField
                   value={editFormData.firstnames}
                   onChange={handleEditFormChange}  
                   id="firstnames"  variant="outlined"
                   style={{  width: '98%'}}  
                  type="text"   placeholder='First Name...'
                />
                  <div className='deux'>
                     <div>
                     <Typography style={{fontWeight:'bold',}}>Date / Place of Birth * </Typography>
                        <TextField
                           value={editFormData.date}
                           onChange={handleEditFormChange}
                           id="date"  variant="outlined"
                           style={{  width: '98%'}}  
                           type="text"   placeholder='date...'
                           />
                        </div>
                     <div>
                      <Typography style={{color:'transparent',}}>  place </Typography>
                         <TextField
                          value={editFormData.place}
                          onChange={handleEditFormChange}
                          id="place"  variant="outlined"
                          style={{  width: '100%'}}  
                          type="text"   placeholder='place...'
                       />
                     </div>
                  </div>
               <Typography style={{fontWeight:'bold',}}>  Email </Typography>
               <TextField
                  value={editFormData.email}
                 onChange={handleEditFormChange}
                  id="email"  variant="outlined"
                  style={{ width: '100%'}}   
                  type="text"    placeholder='email...'
                />

              <Typography style={{fontWeight:'bold',}}>  Adress * </Typography>
               <textarea value={editFormData.address}
                onChange={handleEditFormChange}  id='address' style={{width:'100%'}}>
               </textarea>
               <Typography style={{float:"right",marginTop:'-30px'}}> /20000 </Typography>


             </div>  

          <div className='bloc'>
             <Typography style={{fontWeight:'bold',}}>Last Name * </Typography>
             <TextField
               value={editFormData.lastname}
                onChange={handleEditFormChange}
               id="lastname"  variant="outlined"
               style={{  width: '100%'}}  
               type="text"   placeholder='Last Name...'
              />

             <Typography style={{fontWeight:'bold',}}>Parent Name * </Typography>
             <TextField
               value={editFormData.parentname}
                onChange={handleEditFormChange}
               id="parentname"  variant="outlined"
               style={{  width: '100%'}}  
               type="text"   placeholder='parent Name...'
              />

             <Typography style={{fontWeight:'bold',}}>Phone * </Typography>
             <TextField
               value={editFormData.phone}
               onChange={handleEditFormChange}
               id="phone"  variant="outlined"
               style={{  width: '100%'}}  
               type="text"   placeholder='+1234567890'
              />

       
            
          </div>

         
    </div>   

        <br></br><br></br>
</Paper>
</div>

<br></br><br></br>



<div>
     <div className='root'>
        <div className='main'>
             <div className='texte'>Parent details</div>
       </div>
    </div>
  <Paper>     
         <div className='container'>
            <div className='bloc'>
                <Typography style={{fontWeight:'bold',}}>Father Name *</Typography>
                <TextField
                   value={editFormData.fathername}
                   onChange={handleEditFormChange}   
                   id="fathername"  variant="outlined"
                   style={{  width: '100%'}}  
                  type="text"   placeholder='father name...'
                />

               <Typography style={{fontWeight:'bold',}}>  phone * </Typography>
               <TextField
               value={editFormData.phonefather}
               onChange={handleEditFormChange}
               id="phonefather"  variant="outlined"
               style={{  width: '100%'}}  
               type="text"   placeholder='phone...'
              />


</div>  

          <div className='bloc'>
             <Typography style={{fontWeight:'bold',}}> Mother Name * </Typography>
             <TextField
               value={editFormData.mothername}
               onChange={handleEditFormChange}
               id="mothername"  variant="outlined"
               style={{  width: '100%'}}  
               type="text"   placeholder='mother...'
              />

             <Typography style={{fontWeight:'bold',}}> Phone * </Typography>
             <TextField
               value={editFormData.phonemother}
               onChange={handleEditFormChange}
               id="phonemother"  variant="outlined"
               style={{  width: '100%'}}  
               type="text"   placeholder='phone...'
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

         < div style={{width:'100px',textAlign:"center"}}>
         </div>
    </div>   

        <br></br><br></br>
</Paper>
</div>


</div>

  )
}

export default AddData


