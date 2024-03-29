import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookingDialog from '../../components/Dialog/BookingDialog'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({filtredData}) {
  return (
    <Card style={{width:'100%',marginTop:'20px' }}>
       
       {
        filtredData.map(item=>(
          <div>
       <CardContent>
      <p style={{display:'flex',fontWeight:"bold",color:'black',fontSize:"15px"}}> 
            {item.description} 
         </p>
         <p style={{display:'flex',fontWeight:"bold",color:'green',fontSize:"15px"}}> 
                  12-20-2023
           </p>
        <Typography sx={{ fontSize: 20 ,fontWeight:'bold' }} color="text.secondary" gutterBottom>
             {item.categorie} 
        </Typography>

        <Typography sx={{ fontSize: 20,fontWeight:'bold' }} color="text.secondary" gutterBottom>
             {item.prix} XAF 
        </Typography>

      
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
           < AutoStoriesIcon/> x 5
        </Typography>
        
      </CardContent>
      <CardActions>
             <BookingDialog/> 
             <BookingDialog/> 
      </CardActions>
       </div>
        ))
       }

      
    </Card>
  );
}