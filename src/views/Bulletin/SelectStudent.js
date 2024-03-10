import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography,Grid,Avatar,Divider,MenuItem } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import Tooltip from '@mui/material/Tooltip';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SearchBar from './SearchBar';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InsertNote from './InsertNote';


const Students = [
    {
       'id':1,
       'firstnames':'tiojio junior romain',
       'date':  '12 Mai 2021',
       'identifiant':'#123456789',
       'classroom':'Biere',

    },
    {
     'id':2,
     'firstnames':'karl junior jean',
     'date':  '12 Mai 2021',
     'identifiant':'#665514125',
     'classroom':'Jus canette',
     'place': 'Douala',
     'email':  'appfabrik@gmail.com',
     'address':  'bp96yde',
     'lastname': 'test' ,
     'parentname':'jean claude',
     'phone':'233666545',
     'fathername':'mere claude',
     'mothername':'jeannette lui',
     'phonefather':'566998845',
     'phonemother':'366544',
     'profile':null,
     'matricule':2222023,
     'create':'Administrator',
     'modify':'Administrator',

    },
    {
     'id':3,
     'firstnames':'brenda lui jean',
     'date':  '12 Mai 2021',
     'identifiant':'#558874456',
     'classroom':'Brasserie',
     'place': 'Douala',
     'email':  'appfabrik@gmail.com',
     'address':  'bp96yde',
     'lastname': 'test' ,
     'parentname':'jean claude',
     'phone':'233666545',
     'fathername':'mere claude',
     'mothername':'jeannette lui',
     'phonefather':'566998845',
     'phonemother':'366544',
     'profile':null,
     'matricule':2222023,
     'create':'Administrator',
     'modify':'Administrator',
    },
   
  ];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({addFormData}) {
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen2(false);
  };

  return (
    <div>
         <SpeedDial
           onClick={handleClickOpen}
            color='success'
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 60, right: 100 }}
            icon={<SpeedDialIcon />}
        >
      </SpeedDial>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        onClose={handleClose}
        maxWidth='xs'
        fullWidth="false"
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move',color:'green', fontWeight:'bold' }} id="draggable-dialog-title">
          Select Student {addFormData.classroom} {addFormData.trimestre} {addFormData.sequence} {addFormData.subject}
        </DialogTitle>
        <DialogContent style={{textAlign:'center'}}>
             <SearchBar/><br></br><br></br>
             {
                Students.map((item)=>(
                    <InsertNote setOpen2={setOpen2} item={item}/>                 
                ))
             }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}