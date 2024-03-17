import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import M1 from '../images/M1.jpg'

export default function MediaControlCard({infoDetails}) {
  const theme = useTheme();
  const imagePath ="https://www.djangui.net/media/mysalary/";


  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Audio Complementaire du cour
          </Typography>
          <Typography variant="subtitle1" style={{color:'green'}} component="div">
            Mr Akomo Jean
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
           <audio  src={imagePath+infoDetails?.url} controls />
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={M1}
        alt="Live from space album cover"
      />
    </Card>
  );
}