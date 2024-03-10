import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { Typography,Grid,Avatar } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ViewMatiere from './Matiere/ViewMatiere';
import Eleve from './Eleve/Eleve';
import Info from './Info/Info';
import Vieubulletin from './Bulletin/Vieubulletin'



const App =({handleEditFormSubmitInfo,editFormData,handleEditFormSubmit,handleBackClik,handleEditFormChange})=> {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
 <div id='#aff' style={{marginTop:'-15px',zIndex:'1'}}>

   <span style={{display:'flex'}}>
       <ArrowBackIcon style={{fontSize:'40px',cursor:'pointer'}} onClick={() =>handleBackClik(event) }/>
       <Typography variant='h5' style={{padding:'10px 0px 0px 15px',fontSize:'20px',fontWeight:'bold',color:'green'}} >Classroom   {editFormData.classname} </Typography>
   </span>
       
   <br></br>
   <Paper>
    <Box sx={{ width: '100%',height:'auto', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Info" value="1" />
            <Tab label="Transaction" value="2" />
            <Tab label="Matiere" value="3" />
            <Tab label="Emploi du temps" value="4" />
            <Tab label="Eleve" value="5" />
            <Tab label="Bulletins" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Info 
              handleEditFormSubmitInfo={handleEditFormSubmitInfo}
              handleEditFormChange={handleEditFormChange}
              handleEditFormSubmit={handleEditFormSubmit}
              editFormData={editFormData}
            />
         </TabPanel>
        <TabPanel value="2">Transaction</TabPanel>
        <TabPanel value="3">
             <ViewMatiere/>        
        </TabPanel>
        <TabPanel value="4">Emploi du temps</TabPanel>
        <TabPanel value="5">
           <Eleve 
                handleBackClik
               editFormData={editFormData}
           />
        </TabPanel>
        <TabPanel value="6">
             <Vieubulletin/>
         </TabPanel>
      </TabContext>
    </Box>
 </Paper> 
 </div> 
  );
}


export default App;