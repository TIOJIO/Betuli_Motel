
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

export default function AlertDialogSlide({contact,handleDeleteClik,handleClose}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    handleClose();
    setOpen(true);
  };

  const handleCloseDelete = () => {
    setOpen(false);
  };

  return (
    <div>
      <button style={{width:'100%'}} onClick={handleClickOpen}>
       Delete
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelete}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle> Supprimer {contact.name} {contact.createdDate} nn</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            
             voulez vous vraiment supprimer ?

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button onClick={() =>handleDeleteClik( contact ,handleCloseDelete)}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
