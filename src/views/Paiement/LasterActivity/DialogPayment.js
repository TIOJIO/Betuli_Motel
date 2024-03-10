import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography,Grid,Avatar,Divider } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import NewPayment from './NewPayment';
import Tooltip from '@mui/material/Tooltip';
import Transaction from '../../Transaction/Transaction'




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Tooltip title="new transaction" arrow>
            <Avatar style={{ backgroundColor:'green'}} onClick={handleClickOpen} >  <Add/></Avatar>
         </Tooltip>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="lg"
        fullWidth="false"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
           <Transaction setOpenDialogue={setOpen}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}