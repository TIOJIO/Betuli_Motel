
import React , { useState,useContext} from 'react'
import axios from 'axios'
import {Typography,Button}  from '@material-ui/core';
import {TextField, Box,Container,Paper} from '@material-ui/core';
import Switch from '@mui/material/Switch';
import './style.css';


const AddData = () => {

  const [data ,setData]= React.useState({
    firstname: '' ,
    lastnames: '' ,
    phone: '' ,
    profile:null,
    emplyertype:'',
    admin:'',

       
 });

  const handleAddFormChange =()=>{
    const  newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }

  const handleSubmit =()=>{
    e.preventDefault()          

alert('bonjour') 
  }

  return (
<div style={{marginTop:'-20px'}} >

<div>
<Typography style={{color:'transparent'}}> P</Typography>
<Typography style={{color:'transparent'}}> P</Typography>
    <h1> Administration</h1> 
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
               id="firstname"  variant="outlined"
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

            <Typography style={{fontWeight:'bold',}}>  photo * </Typography>
                <div style={{marginTop:'30px'}}>
                    <Box component="span" sx={{ p: 7,width:'10px', border: '1px dashed grey'}}>
                       <img style={{width:'100px'}}  />
                    </Box>
               <input className='profil'  type="file" id='image' name="myImage"   />

         </div>
   </div>  

      <div className='bloc'>
         <Typography style={{fontWeight:'bold',}}>Last Name * </Typography>
         <TextField
           onChange={handleAddFormChange}
           id="lastnames"  variant="outlined"
           style={{  width: '100%'}}  
           type="text"   placeholder='Last Name...'
          />
        
           <span style={{display:'flex',justifyContent:'space-between',color:'green',fontWeight:'bold'}}>
              <p>Administrator</p>
              <Switch edge="end" color='success' />
           </span>
         
      </div>

       < div style={{width:'100px'}}> </div>
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
            <Typography style={{fontWeight:'bold',}}> Employee's Type *</Typography>
                 <TextField
                     onChange={handleAddFormChange}
                     id="emplyertype" select
                     style={{ width: '100%'}} 
                     SelectProps={{native: true,}} variant="outlined"
                  >
                  <option style={{opacity:'0.1'}} >Select school</option>
                  <option >Teachers </option>
                  <option >auther </option>
                  </TextField>

         </div>  

      <div className='bloc'>
         <Typography style={{fontWeight:'bold',}}> Admin * </Typography>
                 <TextField
                     onChange={handleAddFormChange}
                     id="admin" select
                     style={{ width: '100%'}} 
                     SelectProps={{native: true,}} variant="outlined"
                  >
                  <option style={{opacity:'0.1'}} >Select school</option>
                  <option >admin 1 </option>
                  <option >admin 2 </option>
                  </TextField>
          
          <Button
          style={{ backgroundColor:'green',width:'100px',color:'white'}}
          onClick={handleSubmit}

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
