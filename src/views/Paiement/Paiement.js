

import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TabStatistic from './Statistic/TabStatistic';
import StudentPayment from './StudentPayment';
import LasterActivity from './LasterActivity/LasterActivity';
import ClassroomPayment from './ClassroomPayment';
import ClassroomStatistic from './ClassroomStatistic'


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
    color: theme.palette.text.secondary,
  },
  wrapper :{
    display: 'flex',
    flexWrap: 'wrap',
  },
  
  block1: {
    flex: '1 1 720px',
    margin: '10px',
    padding: '5px',
    width:'80%',
    height:'1000px'
  },
  
  block2 : {
    flex: '1 1 200px',
    margin: '10px',
    width:'30%',
    height:'1000px'


  }

  
  
}));

// Composant principal
function App() {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper}>
         <Grid className={classes.block1}>
            <TabStatistic className={classes.paper}/>  
            <ClassroomPayment/>
            <StudentPayment className={classes.paper}/>
        </Grid>
        <Grid className={classes.block2} >
          <LasterActivity className={classes.paper}/>
        </Grid>
    </Grid>    
  );
}

export default App;


