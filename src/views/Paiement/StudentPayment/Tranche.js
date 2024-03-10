import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid,Avatar,TextField,MenuItem } from '@material-ui/core';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({row}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Inscription" {...a11yProps(0)} />
          <Tab label="Tranche 1" {...a11yProps(1)} />
          <Tab label="Tranche 2" {...a11yProps(2)} />
          <Tab label="Fourniture" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
            <Typography style={{fontWeight:'bold'}}>expected amount  </Typography>
            <Typography style={{color:'green',fontWeight:'bold'}}>{row.inscription}XAF</Typography>
            <Typography style={{fontWeight:'bold'}}>received amount  </Typography>
             <Typography > {row.amount>row.inscription? row.inscription:row.amount-row.inscription > 0? row.amount-row.inscription:row.amount}XAF </Typography>
            <Typography style={{fontWeight:'bold'}}>Statut * {row.amount>=row.inscription? <p style={{color:'green'}}><CheckBoxIcon />completed </p>:<p style={{color:'red'}}><CloseIcon />not completed</p>}</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
            <Typography style={{fontWeight:'bold'}}>expected amount  </Typography>
            <Typography style={{color:'green',fontWeight:'bold'}}>{row.tranche1}XAF</Typography>
            <Typography style={{fontWeight:'bold'}}>received amount  </Typography>
            <Typography > {row.amount-row.inscription>row.tranche1? row.tranche1:row.amount-row.inscription > 0? row.amount-row.inscription:0}XAF </Typography>
            <Typography style={{fontWeight:'bold'}}> Statut * </Typography>
            <Typography style={{fontWeight:'bold'}}> {row.amount-row.inscription > row.tranche1? <p><CheckBoxIcon style={{color:'green'}}/>completed </p>:<p style={{color:'red'}}><CloseIcon />not completed </p>}</Typography>

      </TabPanel>
      <TabPanel value={value} index={2}>
            <Typography style={{fontWeight:'bold'}}>expected amount  </Typography>
            <Typography style={{color:'green',fontWeight:'bold'}}>{row.tranche2}XAF</Typography>
            <Typography style={{fontWeight:'bold'}}>received amount  </Typography>
            <Typography > {row.amount-row.inscription-row.tranche1===row.tranche2? row.tranche2:row.amount-row.inscription-row.tranche1 > 0? amount-row.inscription-row.tranche1:0}XAF </Typography>
            <Typography style={{fontWeight:'bold'}}> Statut * </Typography>
            <Typography style={{fontWeight:'bold'}}> {row.amount-row.inscription-row.tranche1=== row.tranche1? <p><CheckBoxIcon style={{color:'green'}}/>completed </p>:<p style={{color:'red'}}><CloseIcon />not completed </p>}</Typography>

      </TabPanel>

      <TabPanel value={value} index={3}>
               <Typography style={{fontWeight:'bold'}}>Nombre de Fourniture : 04 </Typography>
                <Typography style={{fontWeight:'bold'}}>Nom  </Typography>
                <Typography style={{color:'green'}}> Livre francais , anglais , deux cahier</Typography>
                <Typography style={{fontWeight:'bold'}}>Amount * </Typography>
                <Typography style={{fontWeight:'bold',color:'green'}}>{row.amount}XAF </Typography>
           
      </TabPanel>
     
    </Box>
  );
}