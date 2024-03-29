import React , {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footers';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Log from "../../assets/img/log.png";
import { TextField } from '@material-ui/core';
import './Welcom.css';
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const TypingText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
  
    useEffect(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(prevText => prevText + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 100);
  
      return () => clearInterval(intervalId);
    }, [text]);
  
    return <span>{displayedText}</span>;
  };
  

const HomePage = (props) => {
    return (
      <div className='main-bloc'> 
         <div className='bloc-cover'> 
            <Grid style={{width:'55%',margin:'auto',padding:'0px'}} container spacing={2}>          
               <Grid style={{width:"100%",marginTop:'80px',background:'rgba(255, 255, 255, 0.297)',borderRadius:'5px'}} container spacing={2}>
                     
                     <span style={{padding:'10px 0px 0px 10px'}}>
                         <p style={{color:'white', fontWeight:'bold',paddingBottom:'10px',fontSize:'20px'}}>
                            <TypingText text="Bienvenu chez Vous !"/>
                          </p>
                          <p style={{color:'white',fontWeight:'bold'}}>Meilleur prix garentie pour vous</p>
                     </span>
                    <Grid item xs={12} justifyContent="center">
                       <Grid container style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:'100%'}}>
                            <Grid style={{width:'48%'}}>
                               <p style={{color:'white'}}>Arrivée</p>
                               <TextField id="outlined-basic" style={{width:'100%',backgroundColor:'white',borderRadius:'5px'}} label="Outlined" variant="outlined" />
                            </Grid>
                            <Grid style={{width:'48%'}}>
                               <p style={{color:'white'}}>depart</p>
                               <TextField id="outlined-basic" style={{width:'100%',backgroundColor:'white',borderRadius:'5px'}} label="Outlined" variant="outlined" />
                            </Grid>
                       </Grid>
                       <br></br>
                           <p style={{color:'white'}}>Nombre de personne</p>
                           <TextField id="outlined-basic" label="Outlined" style={{width:'100%',backgroundColor:'white',borderRadius:'5px'}} variant="outlined" /><br></br><br></br>
                            <Button variant="contained" style={{backgroundColor:"#003366" ,height:'60px',width:'100%'}} disableElevation>
                               RECHERCHER
                            </Button>
                   </Grid>
                </Grid>
            </Grid>
           
    </div>
    </div>
     
    );
  
}

export default HomePage;

