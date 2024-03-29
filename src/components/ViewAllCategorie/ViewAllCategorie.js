
import React , {useEffect , useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardChambre from '../../components/Card/CardChambre'
import { Grid } from '@material-ui/core';


function TabPanel(props) {
  const { children, value, index, ...other } = props;


 

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({contacts}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

 


  
  return (
    <Box style={{ backgroundColor:'#f4f7fa',width: '100%' ,margin:'auto' }}>
         <span style={{textAlign:'center'}}>
               <br></br>
               <h1 style={{color:'black',marginTop:'10px'}}> Nos Categorie de chambre </h1>
               </span>
       <Box sx={{ width: '20%' ,margin:'auto', paddingBottom:'40px'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Tout" {...a11yProps(0)} />
          <Tab label="Climatisés" {...a11yProps(1)} />
          <Tab label="Ventillés" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{width: '95%',margin:'auto'}}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid sx={{ flexGrow: 1 }} style={{width:"100%" ,textAlign:'center',alignItems:'center'}} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                {contacts.map((items) => (
                    <Grid key={items.id} item>
                    <CardChambre items={items}/>
                    </Grid>
                ))}
                </Grid>
            </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid sx={{ flexGrow: 1 }} style={{width:"100%" ,textAlign:'center',alignItems:'center'}} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {contacts.map((items) => (
            <Grid key={items.id} item>
               <CardChambre items={items}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
