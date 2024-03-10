

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({contact,editFormData,handleEditFormChange,handleEditFormSubmit}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button style={{width:'100%'}} onClick={handleClickOpen}>
       Edit
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle> Mettre a jour {contact.firstnames}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            
       
    <p><input
        type='text'
         id='firstnames'
         value={editFormData.firstnames}
         onChange={handleEditFormChange}
      /></p> 

      <p><input
        type='text'
         id='identifiant'
         value={editFormData.identifiant}
         onChange={handleEditFormChange}

         
      /></p> 

      <p><input
        type='text'
         id='classroom'
         value={editFormData.classroom}
         onChange={handleEditFormChange}
      /></p> 

     <p><input
        type='text'
         id='matricule'
         value={editFormData.matricule}
         onChange={handleEditFormChange}
      /></p> 



          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <button type='button' onClick={handleEditFormSubmit}>save</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

