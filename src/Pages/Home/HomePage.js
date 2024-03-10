import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footers';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Log from "../../assets/img/log.png";
import Banner from "../../assets/img/bag.jpeg";
import Agile from "../Agile/Agile";
import CardCambre from '../../components/Card/CardChambre'
import DataChambre from '../../components/Card/DataChambre'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@material-ui/core';
import ViewAllCategorie from '../../components/ViewAllCategorie/ViewAllCategorie'
import BestChambre from '../../components/ViewAllCategorie/BestChambre'
import Welcom from '../../components/Welcom/Welcom'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const HomePage = (props) => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <div style={{ backgroundColor:'white' }}>
          <Header isLogin={false}/>
          <Welcom/>

          <br></br>
          <br></br>
          <br></br>
          <span style={{textAlign:'center'}}>
               <h1 style={{color:'black'}}> Découvez une  destination de rêve pour un doux repos et <br></br> 
                 vivez une experience unique dans un cadre serein et luxueux
               </h1>
          </span>

          <ViewAllCategorie/>

          <span style={{textAlign:'center'}}>
               <h1 style={{color:'black'}}> Découvez une  destination de rêve pour un doux repos et <br></br> 
                 vivez une experience unique dans un cadre serein et luxueux
               </h1>
               <h1> Nos Meilleur chambres</h1>
          </span>
          <BestChambre/>

         
         <br></br><br></br>
          <span style={{textAlign:'center'}}>
               <h1 style={{color:'black'}}> Nos Categorie de chambre </h1>

               <Box sx={{ width: '20%' ,margin:'auto', paddingBottom:'40px'}}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                  >
                    <Tab value="one" label="Tous" />
                    <Tab value="two" label="Climatisé" />
                    <Tab value="three" label="Ventilé" />
                  </Tabs>
               </Box>
          </span>

          


   
          

          <h1>New Components</h1>
          <h1>New Components</h1>
          <h1>New Components</h1>
          <Footer/>
                 
    </div>
     
    );
  
}

export default HomePage;
