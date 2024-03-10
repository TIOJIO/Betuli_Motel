import React ,{useState,useEffect}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Divider,Paper } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import Add from '@material-ui/icons/Add';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import logo5 from '../images/img1.png';
import PaymentInfo from './PaymentInfo';
import PaymentsIcon from '@mui/icons-material/Payments';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DialogPayment from './DialogPayment';
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'
import noty from '../images/noty.gif'




const useStyles = makeStyles({
    main: {
     width:'100%',
     backgroundColor:'white',
     height:'1600px',
     margin:'auto',
     borderRadius:'10px',
     display:'flex',
     flexDirection:'column',
     overflow: 'auto',
     overflowY: 'auto',
     '&::-webkit-scrollbar': {
       height:'5px',   
       width: '6px', // Définir la largeur de la barre de défilement
     },
     '&::-webkit-scrollbar-thumb': {
       backgroundColor: '#d9d9d9', // Définir la couleur de la barre de défilement
       borderRadius: '8px', // Définir la forme de la barre de défilement
     },
     
    },

    bloc: {
      marginTop:'30px',
      display:'flex',
      width:'100%',
      justifyContent:'space-evenly',
      padding:'0px 0px 35px 0px',
      cursor: 'pointer',
      alignItems:'center'
      
     },
  
  });

const Transaction=[
     {
          id:1,
          student_name:'paul jean lui',
          classroom:'SIL',
          Amount:400,
          transaction_type:'Inscription',
          payment_statut:'not completed',
          payment_rest:-100,
          payment_date:'12-05-2023 15:25:01',
          profil:img2
     },
     {
          id:2,
          student_name:'Bernard francois ',
          classroom:'CE2',
          Amount:500,
          transaction_type:'Annuel pension ',
          payment_statut:'completed',
          payment_rest:0,
          payment_date:'30-11-2023 11:30:00',
          profil:img3

     },
     {
          id:3,
          student_name:'piere roger ',
          classroom:'CP',
          Amount:500,
          transaction_type:'Inscription ',
          payment_statut:'completed',
          payment_rest:0,
          payment_date:'30-11-2023 11:30:00',
          profil:img4

     },
     {
          id:4,
          student_name:'Peter parker ',
          classroom:'CE2',
          Amount:200,
          transaction_type:'Annuel pension ',
          payment_statut:'not completed',
          payment_rest:300,
          payment_date:'30-11-2023 11:30:00',
          profil:img5

     },
     {
          id:5,
          student_name:'Luc premier ',
          classroom:'CE1',
          Amount:500,
          transaction_type:'Annuel pension ',
          payment_statut:'completed',
          payment_rest:0,
          payment_date:'30-11-2023 11:30:00',
          profil:img6

     },
     {
          id:6,
          student_name:'Jordan park ',
          classroom:'CE2',
          Amount:450,
          transaction_type:'first Tranch ',
          payment_statut:'not completed',
          payment_rest:50,
          payment_date:'30-11-2023 11:30:00',
          profil:img7

     },
     {
          id:7,
          student_name:'Karl Lara ',
          classroom:'CP',
          Amount:500,
          transaction_type:'Annuel pension ',
          payment_statut:'completed',
          payment_rest:0,
          payment_date:'30-11-2023 11:30:00',
          profil:img2

     },
     {
          id:8,
          student_name:'Frank pablo ',
          classroom:'CM2',
          Amount:500,
          transaction_type:'Annuel pension ',
          payment_statut:'completed',
          payment_rest:0,
          payment_date:'30-11-2023 11:30:00',
          profil:img4

     },
     {
          id:9,
          student_name:'Roberto Loic ',
          classroom:'CM1',
          Amount:50,
          transaction_type:'Annuel pension ',
          payment_statut:'not completed',
          payment_rest:450,
          payment_date:'30-11-2023 11:30:00',
          profil:img7

     },
     {
          id:10,
          student_name:'Romain junior ',
          classroom:'SIL',
          Amount:500,
          transaction_type:'Annuel pension ',
          payment_statut:'completed',
          payment_rest:0,
          payment_date:'20-11-2023 11:30:00',
          profil:img4

     },
]



export default function Main(){

     const [studentTransition, setStudentTransition] = useState(JSON.parse(localStorage.getItem('studentTransitions')) || []);
     const [hidden, setHidden] = useState(true);
     const [countActivity, setCountActivity] = useState(studentTransition.length);


     const GetdataLocalstorage=()=>{
          const newstudentTransaction = JSON.parse(localStorage.getItem('studentTransitions'));
          if (newstudentTransaction==null) {
               setHidden(true)
          } else {
               setHidden(false)
              setStudentTransition(newstudentTransaction);
              setCountActivity(newstudentTransaction.length);
     
          }
     }
   
     useEffect(() => {
          GetdataLocalstorage();
     },[]);


    const classes = useStyles();
    return(
    <Grid  > 
         <Paper sx={{ overflow: 'auto' }} container  className={classes.main}>
                <Grid  container className={classes.bloc}>
                       <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                            <Typography style={{fontWeight:'bold'}} >Recent Payment </Typography>
                            <Typography color='textPrimary' >{countActivity} activity not to consult</Typography>
                       </Grid>
                       <DialogPayment/>
                       <Grid style={{textAlign:'center',padding:'20px 0px 10px 0px'}}>
                         <Divider style={{width:'90%',margin:'auto'}}/>
                         <Typography style={{fontWeight:'bold'}} >Paiement informations </Typography>
                         <Typography >modality of this year </Typography>
                         <img style={{width:'80%',borderRadius:'10px'}} src={logo5}/>
                       </Grid>
                </Grid>
                     {
                         hidden? 
                          <div style={{textAlign:'center',padding:'100px 0px 100px 0px'}}>
                              <img width="50px" height="50px" src={noty}/> <Typography>No notification</Typography>
                          </div>
                             :
                              studentTransition.map((transaction)=>(
                                   <PaymentInfo transaction={transaction} style={{fontSize:'40px'}}/>
                              ))
                            
                     }
                

                <Divider style={{width:'90%',margin:'auto'}}/>
                <Grid  container className={classes.bloc}>
                    <Grid style={{textAlign:'center',padding:'10px 0px 10px 0px'}}>
                      <Divider style={{width:'90%',margin:'auto'}}/>
                      <Typography style={{fontWeight:'bold'}} >Paiement informations </Typography>
                      <Typography >modality of this year </Typography>
                      <img style={{width:'80%',borderRadius:'10px'}} src={logo5}/>
                    </Grid>

                </Grid>
         </Paper>
    </Grid>
    )
}