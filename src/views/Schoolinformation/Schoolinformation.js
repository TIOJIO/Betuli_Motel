
import React , { useState,useContext} from 'react'
import axios from 'axios'
import {Typography,Button}  from '@material-ui/core';
import {TextField, Box,Container,Paper} from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import './style.css';
import {useHistory} from 'react-router-dom';




const AddTeacher = ({setOpen,setView}) => {

       
  const [data ,setData]= React.useState({
    schoolname: '' ,
    traderegister: '' ,
    phone:  '',
    email:'',
    stateprovince:'',
    borough:'',
    quarter:'',

    school: '' ,
    currency: '' ,
    payementmode:  '',
    businesscountry:'',
    department:'',
    city:'',
    street:'',
     
         
 });

 const handle = (e) =>{
  const  newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)
  console.log(newdata)
};

const history=useHistory(); 
const mySubmiCtHandler = e => {
   e.preventDefault()          

  alert( data.schoolname+' \n '+data.traderegister+'\n  '+data.phone+'\n'+data.email+'\n'+data.stateprovince+'\n'+data.borough+ '\n'+data.quarter 
    +'\n'+data.school+'\n '+data.currency+'\n '+data.payementmode+' \n'+data.businesscountry+'\n '+data.department+'\n '+data.city+ '\n '+data.street  );
 
}
 return(
<div className='first'>
<h1> School Information</h1> 

         <div className='root'>
            <div className='main'>
                 <div className='texte1'>information</div>
           </div>
        </div>
      <Paper>
          <form >       
             <div className='container'>
                <div className='bloc'>
                    <Typography style={{fontWeight:'bold',}}> School Name  *</Typography>
                    <TextField
                      onChange={(e)=> handle(e)}
                      id="schoolname"  variant="outlined"
                      style={{ width: '100%'}}   
                      type="text"    placeholder='Type your school name...'
                    />

                   <Typography style={{fontWeight:'bold',}}>  Trade Register * </Typography>
                   <TextField
                      onChange={(e)=> handle(e)}
                      id="traderegister"  variant="outlined"
                      style={{ width: '100%'}}   
                      type="text"    placeholder='Type your trader number...'
                    />

                   <Typography style={{fontWeight:'bold',}}>  Phone * </Typography>
                   <TextField
                      onChange={(e)=> handle(e)}
                      id="Phone"  variant="outlined"
                      style={{ width: '100%'}}   
                      type="text"    placeholder='Type your phone...'
                    />

                   <Typography style={{fontWeight:'bold',}}>  Email * </Typography>
                   <TextField
                      onChange={(e)=> handle(e)}
                      id="email"  variant="outlined"
                      style={{ width: '100%'}}   
                      type="text"    placeholder='Type your Email...'
                    />

                   <Typography style={{fontWeight:'bold',}}>  State/Province * </Typography>
                   <TextField
                      onChange={(e)=> handle(e)}
                      id="stateprovince"  variant="outlined"
                      style={{ width: '100%'}}   
                      type="text"    placeholder='Type your state...'
                    />

                   <Typography style={{fontWeight:'bold',}}>  Borough * </Typography>
                   <TextField
                      onChange={(e)=> handle(e)}
                      id="borough"  variant="outlined"
                      style={{ width: '100%'}}   
                      type="text"    placeholder='Type your Borough...'
                    />

                   <Typography style={{fontWeight:'bold',}}>  Quarter * </Typography>
                   <TextField
                      onChange={(e)=> handle(e)}
                      id="quarter"  variant="outlined"
                      style={{ width: '100%'}}   
                      type="text"    placeholder='Type your Quarter...'
                    />
                 </div>  


              <div className='bloc'>
                 <Typography style={{fontWeight:'bold',color:'green'}}> School * </Typography>
                 <TextField
                     onChange={(e)=> handle(e)}
                     id="school" select
                     style={{ width: '100%'}} 
                     SelectProps={{native: true,}} variant="outlined"
                  >
                  <option style={{opacity:'0.1'}} >Select school</option>
                  <option >GSB LA RETRAITE </option>
                  <option >GSG BILINGUE </option>
                  </TextField>

                  <Typography style={{fontWeight:'bold',color:'green'}}> currency * </Typography>
                 <TextField
                     id="currency" select
                     onChange={(e)=> handle(e)}
                     style={{ width: '100%'}} 
                     SelectProps={{native: true,}} variant="outlined"
                  >
                  <option style={{opacity:'0.1'}} >Select a currency</option>
                  <option > currency 1 </option>
                  <option >currency 2</option>
                  </TextField>

                  <Typography style={{fontWeight:'bold',color:'green'}}> Payement Mode * </Typography>
                 <TextField
                     id="payementmode" select
                     onChange={(e)=> handle(e)}
                     style={{ width: '100%'}} 
                     SelectProps={{native: true,}} variant="outlined"
                  >
                  <option style={{opacity:'0.1'}} >Choose Payement Mode</option>
                  <option >Djangui pay </option>
                  <option >MOMO </option>
                  </TextField>

                  <Typography style={{fontWeight:'bold',color:'green'}}> Business's Country * </Typography>
                 <TextField
                     id="businesscountry" select
                     onChange={(e)=> handle(e)}
                     style={{ width: '100%'}} 
                     SelectProps={{native: true,}} variant="outlined"
                  >
                  <option style={{opacity:'0.1'}} >Select business's Country</option>
                  <option >Allemand </option>
                  <option >France </option>
                  </TextField>

                  <Typography style={{fontWeight:'bold'}}> Departement * </Typography>
                  <TextField
                      id="department"  variant="outlined"
                      onChange={(e)=> handle(e)}
                      style={{ width: '100%'}}   
                      type="text"    placeholder='Type Departement...'
                    />

                  <Typography style={{fontWeight:'bold',color:'green'}}> City * </Typography>
                 <TextField
                     onChange={(e)=> handle(e)}
                     id="city" select
                     style={{ width: '100%'}} 
                     SelectProps={{native: true,}} variant="outlined"
                  >
                  <option style={{opacity:'0.1'}} >Select City</option>
                  <option >Douala </option>
                  <option >yaounde </option>
                  </TextField>

                  <Typography style={{fontWeight:'bold'}}> Street * </Typography>
                  <TextField
                      onChange={(e)=> handle(e)}
                      id="street"  variant="outlined"
                      style={{ width: '100%'}}   
                      type="text"    placeholder='Type your street...'
                    />
                  
                 

                  <Button
                  style={{ backgroundColor:'green',width:'200px',height:'50px',color:'white'}}
                  type='submit' 
                  onClick={mySubmiCtHandler}
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


export default AddTeacher;