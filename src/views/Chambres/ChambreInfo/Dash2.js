import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({selectedData}) {
  return (
    <Card style={{width:'100%',marginTop:'20px' }}>
       
 
          <div>
       <CardContent>
      <p style={{display:'flex',fontWeight:"bold",color:'green',fontSize:"20px"}}> 
            {selectedData.description} 
         </p>
         <p style={{display:'flex',fontWeight:"bold",color:'green',fontSize:"15px"}}> 
                  aaaaa12-20-2023
           </p>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            autre info
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           description 
        </Typography>

        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
       </div>
        
      
    </Card>
  );
}