import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Paper, Divider } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Input from './Input';
import Dash1 from './Dash1';




const useStyles = makeStyles((theme)=>({
    main: {
        padding:'20px 0px 0px 20px'
     },
    root: {
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
        height:'100%',
        position:'relatif',
        top:'-100px',
      
    /*  margin: theme.spacing('auto'),
      justifyContent:'flex-start'*/
      },
  }));

export default function Main(){
    const classes = useStyles();

    return(
         

        <div  className={classes.root} >

            <div style={{width:'100%', marginTop:'20px'}}>
                
                     <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                             <Typography variant='h5' style={{color:'green',fontWeight:'bold'}} >Notification & Latest Activity</Typography> 
                                <Grid container style={{width:'52%'}}>
                                      <Input /> 
                                </Grid>
                       </div>

                        <div  style={{width:'100%',marginTop:'20px'}}>
                            <Paper className={classes.main}>
                                <Dash1 /> 
                            </Paper>
                       </div> <br/>

                     
             
            </div>
        </div>  
    
    )
}
