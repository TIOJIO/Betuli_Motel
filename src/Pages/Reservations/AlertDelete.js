
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({item,handleDeleteChambre,handleClose}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    handleClose()
  };

  const handleCloseAlert = () => {
    setOpen(false);
  };

  return (
    <div>
      <ListItemText style={{width:'100%'}} onClick={handleClickOpen}>
          Delete
      </ListItemText>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseAlert}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle> Supprimer {item.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            
             voulez vous vraiment supprimer ?

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlert}>Cancel</Button>
          <Button onClick={() =>handleDeleteChambre( item.id) &&  setOpen(false) }>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
