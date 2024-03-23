import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footers';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Log from '../../assets/img/c1.jpeg'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const HomePage = (props) => {
    return (
      <div style={{ backgroundColor:'rgba(233, 232, 232, 0.829)'}}>
          <Header isLogin={true}/>
          
             <br></br>
             <br></br>
             <br></br>

            <Grid container style={{width:'95%'}}>
              <Grid item xs={12} spacing={1} sm container>
                <Grid item xs={9}>
                      
                <Paper
            elevation={0}
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: '90%',
              flexGrow: 1,
            }}
          >
            <Grid container spacing={2}>
              
              <Grid style={{flexWrap:'wrap',display:'flex',width:'100%',justifyContent:'space-between'}} >
               <Grid style={{width:'30%'}} >
                    <Img width={200} height={200} src={Log}/>
                </Grid>
                <Grid style={{width:'70%'}} >
                  <h1>CHAMBRE : CH124</h1>
                  <h1 style={{fontWeight:'bold',color:'#003366'}}> 10000XAF</h1>
                  <p>Le train du developpement et de l'inovation techonologique . nous somme une agence digital de developpement de logiciel.</p>
                </Grid>
                
              </Grid>
            </Grid>
                </Paper>
   
     <br></br>
                <Paper
            elevation={0}
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: '90%',
              flexGrow: 1,
            }}
          >
            <Grid container spacing={2}>
              
              <Grid style={{flexWrap:'wrap',display:'flex',width:'100%',justifyContent:'space-between'}} >
               <Grid style={{width:'30%'}} >
                    <Img width={200} height={200} src={Log}/>
                </Grid>
                <Grid style={{width:'70%'}} >
                  <h1>CHAMBRE : CH124</h1>
                  <h1 style={{fontWeight:'bold',color:'#003366'}}> 10000XAF</h1>
                  <p>Le train du developpement et de l'inovation techonologique . nous somme une agence digital de developpement de logiciel.</p>
                </Grid>
                
              </Grid>
            </Grid>
                </Paper>

                </Grid>

                <Grid item  style={{width:'25%'}}>
                <Paper
            elevation={0}
            sx={{
              p: 2,
              margin: 'auto',
              width: '100%',
              height:'300px'
            }}
          >
                    <h1>Mes Reservations</h1>
                    <p>our compagnie</p>
                    </Paper>
                </Grid>

              </Grid>
            </Grid>
         

         <br></br>
             <br></br>
             <br></br>
          <Footer/>
                 
    </div>
     
    );
  
}

export default HomePage;

