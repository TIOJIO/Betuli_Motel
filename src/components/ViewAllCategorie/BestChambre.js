import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext'; 
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Carousel = ({contacts}) => {

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % contacts.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + contacts.length) % contacts.length);
  };

  const theme = useTheme();
  return (

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <IconButton  onClick={prevSlide} aria-label="delete">
        <ArrowBackIos  style={{fontSize:'50px'}}/>
      </IconButton>
      <Slide  direction="up" in={true} mountOnEnter unmountOnExit>
      <Card style={{flexWrap:'wrap', display: 'flex',width:'80%',justifyContent:'space-arround' }}>
        <CardMedia
      component="img"
      sx={{ width: 400, height:'300px' }}
      image={contacts[index].img}
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' ,width:'50%'}}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
            {contacts[index].name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
             {contacts[index].description}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label="previous">
          {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        <IconButton aria-label="play/pause">
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
        <IconButton aria-label="next">
          {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
      </Box>
    </Box>
  </Card>
      </Slide> 

      <IconButton onClick={nextSlide} aria-label="delete">
        <ArrowForwardIosIcon  style={{fontSize:'50px'}}/>
      </IconButton>
    </div>
  );
};

export default Carousel;