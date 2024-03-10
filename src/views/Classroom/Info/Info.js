
import React from 'react'
import {Typography,TextField, Box,Button,Avatar,Divider} from '@material-ui/core';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import './style.css';


const AddData = ({editFormData ,handleEditFormChange ,handleEditFormSubmitInfo}) => {
  return (
   <div style={{marginTop:'30px'}} id="NewClassroom">

             <form >       
                <div>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <PersonIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <span style={{ width: '100%'}} >
                        <Typography style={{fontWeight:'bold',}}> Noms</Typography>
                       <TextField
                         value={editFormData.classname}
                         onChange={handleEditFormChange}
                         id="classname"  variant="standard"
                         style={{ width: '100%'}}   
                         type="text"    placeholder='Nom de la matiere...'
                       />
                        </span>
                    </Box>   
                       <br></br><br></br><br></br>
                  

              <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <PersonIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <span style={{ width: '100%'}} >
                      <Typography style={{fontWeight:'bold',}}>Nombre d'eleve</Typography>
                       <TextField
                         value={editFormData.maxstudent}
                         onChange={handleEditFormChange}
                         id="maxstudent"  variant="standard"
                         style={{ width: '100%'}}   
                         type="text"    
                       />
                             </span>
                    </Box>   
                       <br></br><br></br>


                 <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <PersonIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <span style={{ width: '100%'}} >
                        <Typography style={{fontWeight:'bold',}}> Nom ensignat principal</Typography>
                       <TextField
                         value={editFormData.headteacher}
                         onChange={handleEditFormChange}
                         id="headteacher"  variant="standard"
                         style={{ width: '100%'}}   
                         type="text"    
                       />
                                   </span>
                    </Box> 
                     <br></br><br></br>

                <Divider/>

      <Typography style={{fontWeight:'bold',}}> Prix(XFA)</Typography>  <br></br>
      <Typography> Telecharger uniquement les cours d'une classe</Typography>  <br></br>

      <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <AccountBalanceWalletIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <span style={{ width: '100%'}} >
                 <Typography style={{fontWeight:'bold',}}> Nom ensignat principal</Typography>
                       <TextField
                         value='500'
                         id="headteacher"  variant="standard"
                         style={{ width: '100%'}}   
                         type="text"    
                       />
                                   </span>
                    </Box> 
                     <br></br><br></br>


      <Typography> Participer uniquement les cours d'une classe </Typography>  <br></br>

      <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <AccountBalanceWalletIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <span style={{ width: '100%'}} >
                 <Typography style={{fontWeight:'bold',}}> prix par semaine</Typography>
                       <TextField
                         value='500'
                         id="headteacher"  variant="standard"
                         style={{ width: '100%'}}   
                         type="text"    
                       />
                                   </span>
                    </Box> 
                     <br></br><br></br>

                     <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <AccountBalanceWalletIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <span style={{ width: '100%'}} >
                 <Typography style={{fontWeight:'bold',}}> prix par mois</Typography>
                       <TextField
                         value='500'
                         id="headteacher"  variant="standard"
                         style={{ width: '100%'}}   
                         type="text"    
                       />
                                   </span>
                    </Box> 
                     <br></br><br></br>


                     <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <AccountBalanceWalletIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <span style={{ width: '100%'}} >
                 <Typography style={{fontWeight:'bold',}}> prix par ans</Typography>
                       <TextField
                         value='500'
                         id="headteacher"  variant="standard"
                         style={{ width: '100%'}}   
                         type="text"    
                       />
                                   </span>
                    </Box> 
                     <br></br><br></br>


              <Button
                     style={{ backgroundColor:'green',width:'200px',height:'50px',color:'white'}}
                     type='submit' 
                     onClick={() =>handleEditFormSubmitInfo(event) }

                     > 
                         SAVE
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

