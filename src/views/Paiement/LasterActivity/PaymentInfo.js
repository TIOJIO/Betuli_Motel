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
import CheckBoxIcon from '@mui/icons-material/CheckBox';




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

export default function DraggableDialog({transaction}) {
  const [open, setOpen] = React.useState(false);

  
  


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete=()=>{
   /* const updatedStudents = [...students];
    updatedStudents.splice(transaction.id, 1);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));*/
  }

  const classes = useStyles();
  return (
    <div>
      <MenuList>
        <MenuItem onClick={handleClickOpen}>
          <ListItemIcon>
            <Avatar fontSize="small" src={transaction.profil} />
          </ListItemIcon>
          <ListItemText> {transaction.firstnames}</ListItemText>
          <Typography  style={{fontWeight:'bold'}} color="black">
             <CheckBoxIcon style={{color:'green'}}/> {transaction.amount}F
          </Typography>
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
          Payment Information
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            this information concerns the student's financial status for this year
            school as well as these payments.
          </DialogContentText>

          <Grid className={classes.wrapper}>
                <Grid className={classes.blockimg}>
                    <img style={{width:'150px',height:'180px'}} src={transaction.profil}/>
                </Grid>
                <Grid className={classes.block1}>
                    <Typography style={{fontWeight:'bold'}}>school name * </Typography>
                    <Typography>{transaction.school_name}</Typography>
                    <Typography style={{fontWeight:'bold'}}>Student name * </Typography>
                    <Typography>{transaction.firstnames}</Typography>
                    <Typography style={{fontWeight:'bold'}}>Classroom  *</Typography>
                    <Typography style={{color:'green'}}>{transaction.classroom} </Typography>
                    <Typography style={{fontWeight:'bold'}}>Annuel Statut * </Typography>
                    <Typography >Payment : {transaction.annual_pension==transaction.amount? '✅completed':'❌ not completed'} </Typography>
                         
                </Grid>
                <Grid className={classes.block2} >
                <Typography style={{fontWeight:'bold'}}>Transaction Type * </Typography>
                <Typography >{transaction.costof} </Typography>
                <Typography style={{fontWeight:'bold'}}>Payment By * </Typography>
                <Typography style={{color:'green'}}> {transaction.paymentby}</Typography>
                <Typography style={{fontWeight:'bold'}}>Payment Date * </Typography>
                <Typography style={{color:'green'}}> {transaction.date}</Typography>
                <Typography style={{fontWeight:'bold'}}>Amount * </Typography>
                <Typography style={{fontWeight:'bold',color:'green'}}>{transaction.amount}XAF </Typography>
                </Grid>
         </Grid>

        </DialogContent>
        <DialogActions>
        <Button  style={{color:'red'}}autoFocus onClick={handleDelete}>
            Delete
          </Button>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}