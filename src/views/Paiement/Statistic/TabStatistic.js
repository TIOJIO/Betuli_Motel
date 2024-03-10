import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { Typography,Grid,Container,Paper, Divider } from '@material-ui/core';
import Statistic from './Statistic';
import { Button, Menu, MenuItem } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
}));



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
            <Typography >{children}</Typography>
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
  
  export default function BasicTabs() {
    const [data , setData]=useState('');
    const [value, setValue] = React.useState(0);
    const [paymentMode, setPaymentMode] = React.useState(0);
    const history=useHistory(); 
  
    const handleChange = (event, newValue) => {
      setValue(newValue);

    };
    const options = [
      {
        name:'Versement By',
        dropdown:1,
      },
      {
        name:'Payment statistics',
        dropdown:0,
        link:'../StudentPayment#studentPay',
      },
      {
        name:'Classrrom statistics',
        dropdown:0,
        link:'../ClassroomPayment#classroomstatistic',
      },
      {
        name:'Students transactions',
        dropdown:0,
        link:'../StudentPayment#studentPay',
      }
    ];

    const PaymentMode=["orange money","mtn money","Djangui Pay","Express Union" ]

      const [anchorEl, setAnchorEl] = React.useState(null);
      const [anchorMode, setAnchorMode] = React.useState(null);
      const classes = useStyles();
    
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClickMode = (event) => {
        setAnchorEl(null);
        setAnchorMode(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const handleCloseMode = () => {
        setAnchorMode(null);
      };

      const handleLink = ()=>{
        setAnchorEl(null);
         history.push('paiement/StudentPayment/#studentPay');
      }



    return (
      <Box sx={{ width: '100%' }}>
           <Grid item xs={12}  >
                <Typography variant='h5' style={{color:'black',fontWeight:'bold',marginTop:'-70px'}} >Dashboard Payment</Typography> <br></br>
           </Grid>
                  <div  className={classes.root}>
                          <Menu
                            arrow
                             id="basic-menu"
                            anchorEl={anchorMode}
                            keepMounted
                            open={Boolean(anchorMode)}
                            onClose={handleCloseMode}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}
                          >
                            {PaymentMode.map((option) => (
                              <MenuItem arrow key={option} onClick={handleCloseMode}>
                                {option}
                              </MenuItem>
                            ))}
                          </Menu>
                      </div>
                      <div className={classes.root}>
                          <Menu
                          arrow
                             id="basic-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}
                          >
                            {options.map((option) => (
                              <MenuItem arrow key={option} onClick={option.dropdown==1? handleClickMode:handleLink}>
                                {option.dropdown==1?  <label>Versement By  <ArrowDropDownIcon/></label> : <a style={{color:'black',textDecoration:'none'}} href={option.link} >{option.name}</a> }
                              </MenuItem>
                            ))}
                          </Menu>
                      </div>

            <Box sx={{ borderBottom: 1,  }}>
                <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab  label="Today" {...a11yProps(0)} /> 
                  <Tab  label="Last Week" {...a11yProps(1)} />
                  <Tab  label="Last Month" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <Statistic value={value} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Statistic value={value}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Statistic value={value}/>
            </TabPanel>
      </Box>
    );
  }

