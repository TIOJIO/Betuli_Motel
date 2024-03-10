import React ,{useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Paper, Box } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Person3Icon from '@mui/icons-material/Person3';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddIcon from '@mui/icons-material/Add';
import { ArrowDownward } from '@mui/icons-material';
import { ArrowUpward } from '@mui/icons-material';
import ManIcon from '@mui/icons-material/Man';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Tooltip from '@mui/material/Tooltip';

// Utilisation du hook makeStyles pour personnaliser les styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  blockitem:{
    flexWrap:'wrap',
    width:'100%',
    height:'auto',
    fontFamily: "Times New Roman, Times, serif",
    display:'flex',
    justifyContent:'space-evenly',
 },
 blockitem1:{
    flexWrap:'wrap',
    textAlign:'center',
    width:'75%',
    fontFamily: "Times New Roman, Times, serif",
    display:'flex',
    justifyContent:'space-evenly',
 },
 wrapper :{
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent:'space-between',
  width:'113%',
  marginLeft:'-50px',
},

card: {
  flex: '1 1 230px',
  margin: '5px',
  padding: '2px',
  width:'auto'
},
}));

// Composant principal
function App({value}) {

  const [data , setData] =useState('');
  const values = {value};
  const [filterValueStatut, setFilterValueStatut] = useState("all");
  const [studentTransition, setStudentTransition] = useState(JSON.parse(localStorage.getItem('studentTransitions')) || []);
  const [montants ,setMontants]=useState(0);
  const [countTransaction ,setCountTransaction]=useState(studentTransition.length);

  const somme =()=>{
       let sum = 0;
        studentTransition.map((item)=>(
          sum += Number(item.amount)
       ))
       setMontants(sum)

  }

  useEffect(()=>{
    somme();

  },[])

  const handleFilterChangeStatut = (event) => {
    setFilterValueStatut(event.target.value);
  };

    const Today=[
        {
       totalreverse:{
       id:1,
       montant:105962,
       pourcentage:89,
       plus:4789,
       moin:547
      },
      totalstudent:{
       id:2,
       montant:984,
       pourcentage:52,
       plus:985,
       moin:547
      },
      totaltransaction:{
       id:3,
       montant:99878,
       pourcentage:59,
       plus:877,
       moin:878
      }
    }
    ];
 
    const Last_Week=[{
      totalreverse:{
       id:1,
       montant:95962,
       pourcentage:25,
       plus:6978,
       moin:478
      },
      totalstudent:{
       id:2,
       montant:587,
       pourcentage:12,
       plus:325,
       moin:99
      },
      totaltransaction:{
       id:3,
       montant:98974,
       pourcentage:69,
       plus:6295,
       moin:2155
      }
   }];
 
   const Last_Month=[{
    totalreverse:{
     id:1,
     montant:87489,
     pourcentage:14,
     plus:588,
     moin:478
    },
    totalstudent:{
     id:2,
     montant:354,
     pourcentage:11,
     plus:254,
     moin:658
    },
    totaltransaction:{
     id:3,
     montant:98745,
     pourcentage:45,
     plus:214,
     moin:147
    }
 }];
  const classes = useStyles();
return (
  <div>
           <Typography style={{fontWeight:'bold',color:'green'}}>Statistic of Payment</Typography>
        <div className={classes.root}>
          {(value==0? Today: value==1? Last_Week:Last_Month).map((item)=>(
            <Grid className={classes.wrapper}>
                <Grid className={classes.card}>
                      <Paper className={classes.paper}>
                            <Grid  className={classes.blockitem1} >
                                <MonetizationOnIcon sx={{ fontSize: 40 , color:'orange'}} />
                                <Typography  color='textPrimary' >Total reverse</Typography>
                            </Grid>
                            <Grid  className={classes.blockitem} >
                                <Typography variant='h6' style={{fontWeight:'bold'}}> {montants}XAF </Typography>
                                  <Typography  style={{color:'red'}}> <TrendingDownIcon/> -{item.totalreverse.pourcentage}%</Typography>
                            </Grid>
                              <Grid className={classes.blockitem} >
                                  <Typography  style={{color:'white'}}>.</Typography>
                            </Grid>
                      </Paper>
                  </Grid>

                  <Grid className={classes.card}>
                        <Paper className={classes.paper}>
                                <Grid className={classes.blockitem1} >
                                    <AccountBoxIcon sx={{ fontSize: 40 , color:'green'}} />
                                    <Typography  color='textPrimary' >Total Eleve </Typography>
                                </Grid>
                                <Grid className={classes.blockitem} >
                                 <Tooltip title="Total number of student" arrow>
                                      <Typography variant='h6'  style={{fontWeight:'bold'}}> {item.totalstudent.montant} </Typography>
                                  </Tooltip>
                                      <Typography  style={{color:'green',fontWeight:'bold'}}>+{item.totalstudent.pourcentage}</Typography>
                                </Grid>
                                <Grid className={classes.blockitem} >
                                      <Typography variant='h8'  style={{color:'green',fontWeight:'bold'}}> <ManIcon sx={{fontSize:20}}/> {item.totalstudent.plus}</Typography>
                                      <Typography variant='h8' style={{color:'red',fontWeight:'bold'}}> <ManIcon sx={{fontSize:20}}/> {item.totalstudent.moin}</Typography>
                                      <Typography variant='h8' style={{fontWeight:'bold'}}> students</Typography>
                                </Grid>
                        </Paper>
                    </Grid>

                    <Grid className={classes.card}>
                        <Paper className={classes.paper}>
                                <Grid className={classes.blockitem1} >
                                    <AccountBalanceWalletIcon sx={{ fontSize: 40 , color:'#993300'}} />
                                    <Typography  color='textPrimary' > Transaction</Typography>
                                </Grid>
                                <Grid className={classes.blockitem} >
                                    <Typography variant='h6'  style={{fontWeight:'bold'}}> {montants}XAF </Typography>
                                    <Typography  style={{color:'green'}}> <TrendingUpIcon/> {item.totaltransaction.pourcentage}%</Typography>
                                </Grid>
                                <Grid className={classes.blockitem} >
                                    <Typography variant='h8'  style={{color:'green',fontWeight:'bold'}}> <ArrowUpward sx={{fontSize:20}}/> {countTransaction}</Typography>
                                    <Typography variant='h8' style={{color:'red',fontWeight:'bold'}}> <ArrowDownward sx={{fontSize:20}}/> {item.totaltransaction.moin}</Typography>
                                </Grid>
                        </Paper>
                    </Grid>
        </Grid>
        ))} 
        </div>
  </div>
);
}

export default App;
