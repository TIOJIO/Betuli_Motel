import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Container,Paper, Divider } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Dash4 from './Dash4';
import Input from './Input';
import Dash1 from './Dash1';
import Dash2 from './Dash2';
import Dash3 from './Dash3';
import StudentPayment from './StudentPayment'


const useStyles = makeStyles((theme)=>({
    main: {
        
     },
    root: {
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
        height:'100%',
        position:'relatif',
        marginTop:'-90px',
      
    /*  margin: theme.spacing('auto'),
      justifyContent:'flex-start'*/
      },
  }));

export default function Main(){
    const classes = useStyles();

    return(
         

        <div  className={classes.root} >

            <div style={{width:'80%', marginTop:'20px'}}>
                
                     <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                             <Typography variant='h5' style={{color:'black',fontWeight:'bold'}} >Dashboard</Typography> 
                                
                       </div>
                        <div  style={{width:'98%'}}>
                          <Dash1 className={classes.main}/> 
                       </div> <br/>

                       <div  style={{width:'98%'}}>
                          <Dash3 className={classes.main}/>
                       </div> <br/>
                       
                       <div  style={{width:'98%'}}>
                          <StudentPayment className={classes.main}/>
                       </div> <br/>

             
            </div>
          
            <div style={{width:'30%', marginTop:'-20px'}} > 
               <Dash2 className={classes.main}/> 
            </div>

        </div>  
    
    )
}
