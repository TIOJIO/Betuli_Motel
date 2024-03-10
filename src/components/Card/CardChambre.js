import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import c1 from '../../assets/img/c1.jpeg'
import {useHistory} from 'react-router-dom';

export default function MediaCard({items}) {

  const history=useHistory();
  const handleChambreInfo = (e) => {
    e.preventDefault()
          history.push('chambreinfo/'+items.id);
   }
  return (
    <Card onClick={handleChambreInfo} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={items.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {items.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {items.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}