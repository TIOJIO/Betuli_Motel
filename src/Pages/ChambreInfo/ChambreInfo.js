import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Paper } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import Header from '../../components/Header/Header';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "react-router-dom";
import ChambreData from '../../Data/ChambreData'
import Dash1 from './Dash1'
import Dash2 from './Dash2'




 const useStyles = makeStyles({
    main: {
     width:'100%',
     height:'auto',
     justifyContent:'space-between'
    },
    bloc1: {
      width:'100%',
      backgroundColor:'rgb(17, 141, 65)',
      height:'100px',
      borderRadius:'10px 10px 0px 0px',
     },
     bloc2: {
        width:'100%',
        backgroundColor:'rgb(17, 141, 65)',
        height:'100px',
        borderRadius:'10px 10px 0px 0px',
       },
     
  
  });

 

export default function Main({}){

  const [contacts , setContacts] = useState([]);

  useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem('chambres')) || [];
    if (storedData.length===0) {
       console.log('pas de donne');
    } else {
       setContacts(storedData);
       console.log('donner trouver')
    }
    
   },[])

  let {id} = useParams();
  console.log(id)
  console.log(contacts)
  const filtredData = contacts.filter(item=>item.name===id);

  


    const classes = useStyles();
    return(
    <Grid id="detail">
        <Header/>

        <h1 style={{fontWeight:'bold',marginTop:'70px',color:'black',paddingLeft:"70px"}}> DETAIL SUR LA CHAMBRE</h1>
       <Grid  style={{ height: 'auto',margin:'auto', width: "90%",display:"flex",justifyContent:'space-between',flexWrap:'wrap',justifyItems:'center' }}>
        <Grid style={{width:'900px'}}>
             <Dash1 filtredData={filtredData}/>
        </Grid>

        <Grid style={{width:'400px'}}>
            <br></br>
             <Dash2 filtredData={filtredData}/>
        </Grid>
      </Grid>
    </Grid>
    )
}