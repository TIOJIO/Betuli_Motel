import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import './Styles.css'
import MenuIcon from '@mui/icons-material/Menu';
import { GitHub } from '@material-ui/icons';
export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid className='back' >
      <Grid  sx={{ flexGrow: 1 }} container spacing={2} className='back-img'>
       
      <Grid style={{padding:'60px 0px 20px 0px',width:'100%',textAlign:'center'}}>
            <GitHub style={{color:'white',fontSize:'40px' }} />
             <h1 className='txt-agile'>UNE APPROCHE AGILE</h1>
      </Grid>

      <Grid  item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
            <Grid item>
              <Paper
                sx={{
                  border:'1px solid #96b3d1',
                  textAlign:'center',
                  height: 'auto',
                  width: 300,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'rgb(183, 90, 8)' : 'rgb(183, 90, 8)',
                }}
              >
               <div style={{padding:'0px 20px 5px 20px'}}>
                  <h3 style={{color:'white'}}>Approche Iterative</h3>
                  <p style={{color:'white'}}> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
               </div>
             </Paper>
            </Grid>

            <Grid item>
              <Paper
                sx={{
                  border:'1px solid #96b3d1',
                  height: 'auto',
                  width: 300,
                  textAlign:'center',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'rgb(183, 90, 8)' : 'rgb(183, 90, 8)',
                }}
              >
              <div style={{padding:'0px 20px 5px 20px'}}>
                  <h3 style={{color:'white'}}>Approche Incremental</h3>
                  <p style={{color:'white'}}> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
               </div>
             </Paper>
            </Grid>

        </Grid>
      </Grid>

      <Grid style={{paddingBottom:'100px'}} item xs={12}>
        <Grid container justifyContent="center"  spacing={spacing}>
            <Grid item>
              <Paper
                sx={{
                  border:'1px solid #96b3d1',
                  height: 'auto',
                  width: 300,
                  textAlign:'center',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'rgb(183, 90, 8)' : 'rgb(183, 90, 8)',
                }}
              >
              <div style={{padding:'0px 20px 5px 20px'}}>
                  <h3 style={{color:'white'}}>ADAPTATIVE</h3>
                  <p style={{color:'white'}}> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
               </div>
             </Paper>
            </Grid>

            <Grid item>
              <Paper
                sx={{
                  border:'1px solid #96b3d1',
                  height: 'auto',
                  textAlign:'center',
                  width: 300,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'rgb(183, 90, 8)' : 'rgb(183, 90, 8)',
                }}
              >
              <div style={{padding:'0px 20px 5px 20px'}}>
                  <h3 style={{color:'white'}}>MAIN dans la Main</h3>
                  <p style={{color:'white'}}> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
               </div>
             </Paper>
            </Grid>

        </Grid>
      </Grid>

  </Grid>
    </Grid>
  );
}
