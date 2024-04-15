import React, { useState , useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import c1 from '../../assets/img/lo1.gif'
import {useHistory} from 'react-router-dom';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import MessageIcon from '@mui/icons-material/Message';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import { collection,getStorage,uploadBytesResumable , addDoc ,setDoc, doc, query, orderBy, onSnapshot, QuerySnapshot, deleteDoc} from 'firebase/firestore';
import { getDownloadURL, listAll, ref,uploadBytes } from "firebase/storage";
import { db } from '../../Firebase/Config';

export default function MediaCard({items,handleAddToCard,handleSelectedChambre}) {

 
 
  const history=useHistory();
  const handleChambreInfo = (e) => {
    e.preventDefault()
          history.push('chambreinfo/'+items.name);
   }

   

  return (
    <Card  sx={{ maxWidth: 345 ,height:350 }}>
      <CardMedia
        sx={{ height: 200 ,width:345 }}
        image={items.img? items.img : c1}
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
      <CardActions disableSpacing>

           <Button color="primary" onClick={()=>handleSelectedChambre(items)} style={{borderRadius:'50px',fontSize:'10px'}} >
              <ThumbUpOffAltIcon /> &nbsp;&nbsp; Consulter
           </Button>
      
           <Button color="primary" onClick={()=>handleAddToCard(items)} style={{borderRadius:'50px',fontSize:'10px'}}>
              <AddShoppingCartIcon style={{fontSize:'17px'}}/> &nbsp;&nbsp; Ajouter
           </Button>

           <Button color="primary" style={{borderRadius:'50px',fontSize:'10px'}}>
              <InventoryIcon style={{fontSize:'17px'}} /> &nbsp;&nbsp; Reserver
           </Button>
   
      </CardActions>
    </Card>
  );
}