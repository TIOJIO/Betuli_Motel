import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography,Grid,Avatar,Divider,MenuItem, TextField } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import Tooltip from '@mui/material/Tooltip';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({item,setOpen2}) {
  const [open1, setOpen1] = React.useState(false);
  const[maths , setMaths]=React.useState('');
  const[histoire , setHistoire]=React.useState('');
  const[geographie , setGeographie]=React.useState('');
  const[science , setScience]=React.useState('');
  const [studentNotes , setStdentNotes]=React.useState(JSON.parse(localStorage.getItem('studentNotes')) || []);

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen2(false);

    //setOpen1(false);
  };

  const handleClickInsert = () => {
    const student_name=item.firstnames;
    const newNotes = {student_name,maths,geographie,histoire,science};
    setStdentNotes([...studentNotes, newNotes]);
    localStorage.setItem('studentNotes', JSON.stringify([...studentNotes, newNotes]));
    setOpen2(false);
    setOpen1(false);
  };

 const myChangeHandlerM = (event) => {
    setMaths(event.target.value);
  }
  const myChangeHandlerH = (event) => {
    setHistoire(event.target.value);
  }
  const myChangeHandlerG = (event) => {
    setGeographie(event.target.value);
  }
  const myChangeHandlerS = (event) => {
    setScience(event.target.value);
  }


  return (
    <div>
                  <MenuList onClick={handleClickOpen}>
                        <MenuItem >
                            <ListItemText> {item.firstnames}</ListItemText>
                        </MenuItem>
                    </MenuList>
      <Dialog
        open={open1}
        TransitionComponent={Transition}
        onClose={handleClose}
        maxWidth='xs'
        fullWidth="false"
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move',color:'green', fontWeight:'bold' }} id="draggable-dialog-title">
          Insert Note de {item.firstnames}
        </DialogTitle>
        <DialogContent style={{textAlign:'center'}}>
           <MenuList >
                 <MenuItem >
                     <ListItemText> Mathematique : </ListItemText>
                     <TextField  type='text'  onChange={(e)=>myChangeHandlerM(e)}/>
                 </MenuItem>
                 <MenuItem >
                     <ListItemText> Geographie :</ListItemText>
                     <TextField  type='text'  onChange={(e)=>myChangeHandlerG(e)}/>
                 </MenuItem>
                 <MenuItem >
                     <ListItemText> Histoire : </ListItemText>
                     <TextField  type='text' onChange={(e)=>myChangeHandlerH(e)}/>
                 </MenuItem>
                 <MenuItem >
                     <ListItemText> Sciences :</ListItemText>
                     <TextField  type='text'  onChange={(e)=>myChangeHandlerS(e)}/>
                 </MenuItem>
            </MenuList>     
        </DialogContent>
        <DialogActions>
          <Button style={{backgroundColor:'green'}} onClick={handleClickInsert}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}