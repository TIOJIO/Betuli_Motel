import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Add from '@material-ui/icons/Add';
import Slide from '@mui/material/Slide';
import { Typography,Grid,Avatar,TextField,MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@mui/material/Autocomplete';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tranche from './Tranche';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCardIcon from '@mui/icons-material/AddCard';



const useStyles = makeStyles((theme) => ({

    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    wrapper :{
      display: 'flex',
      flexWrap: 'wrap',
    },
    
    block1: {
      flex: '1 1 100px',
      margin: '10px',
      padding: '10px',
      width:'50%'
    },
    blockimg: {
      flex: '1 1 50px',
      margin: '1px',
      padding: '1px',
      width:'10%'
    },
    
    block2 : {
      flex: '1 1 100px',
      margin: '10px',
      padding: '20px',
      width:'50%'
    }
  
    
    
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="Down" ref={ref} {...props} />;
  });

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog({row,setAnchorEl}) {
  const [open, setOpen] = React.useState(false);

  
  


  const handleClickOpen = () => {
    setAnchorEl(null)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <MenuList>
        <MenuItem onClick={handleClickOpen}>
          <ListItemIcon>
            <AccountBalanceWalletIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText> Student Payment</ListItemText>
        </MenuItem>
    </MenuList>

      <Dialog
        maxWidth='md'
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        TransitionComponent={Transition}
      >
        <DialogTitle style={{ cursor: 'move',color:'green', fontWeight:'bold' }} id="draggable-dialog-title">
          Student Payment Information
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            this information concerns the student's financial status for this year
            school as well as these payments.
          </DialogContentText>

          <Grid className={classes.wrapper}>
                <Grid className={classes.blockimg}>
                    <img style={{width:'170px',height:'180px'}} src={row.profil}/>
                </Grid>
            
                <Grid className={classes.block1}>
                    <Typography style={{fontWeight:'bold'}}>Student name * </Typography>
                    <Typography>{row.firstnames}</Typography>
                    <Typography style={{fontWeight:'bold'}}>Classroom  *</Typography>
                    <Typography style={{color:'green'}}>{row.classroom} </Typography>
                    <Typography style={{fontWeight:'bold'}}>annual pension* </Typography>
                    <Typography style={{fontWeight:'bold',color:'green'}}>{row.annual_pension}XAF </Typography>
                     
                </Grid>
                <Grid className={classes.block2} >

                </Grid>
         </Grid>
          <Grid>
               <Tranche row={row}/>
            </Grid>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>See Bill</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}