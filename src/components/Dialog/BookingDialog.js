import React ,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';
import {PaymentOperation, RandomGenerator} from '@hachther/mesomb';

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
    borderRadius:'5px',
    margin: theme.spacing(1, 0),
    padding:'10px 0px 10px 0px'
  },
  btns:{
    backgroundColor:"#003366",
    borderRadius:'5px',
    height:"40px",
    width:"150px",
    border:'none',
    color:'white',
    fontWeight:'bold'
  },
  txt:{
    fontFamily: "Times New Roman, Times, serif",
    fontWeight:'bold'
  },
  btns_cancel:{
    border:" 2px solid #003366",
    borderRadius:'5px',
    height:"40px",
    width:"150px",
    color:'#003366',
    fontWeight:'bold'
  },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const [startDate , setStartDate]=useState("");
  const [endDate , setEndDate]=useState("");
  const [person , setPerson]=useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit =  async() =>{
    const url = 'https://mesomb.hachther.com/en/web/payment/?app=b5fa00c709930c9a7e093ab2a49b251023a919a1&action=refill';

    // Options pour le popup
    const options = 'width=600,height=400';

    // Ouvrir la page dans un popup
    window.open(url, '_blank', options);
     
     
  }

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Button color="primary" style={{borderRadius:'50px'}} variant="outlined" onClick={handleClickOpen}>
        RESERVER
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Veillez remplir les informations"}</DialogTitle>
        <DialogContent>
            <label className={classes.txt}>Date Arrivée</label>
            <input 
              className={classes.textField}
              onChange={(e) =>setStartDate(e.target.value)}
              id="debut..."
              type="date"  placeholder="date arrivée..."
             />

            <label className={classes.txt}>Date Départ</label>
            <input 
              className={classes.textField}
              onChange={(e) =>setEndDate(e.target.value)}
              id="fin..."
              type="date"  placeholder="date départ..."
             />

            <label className={classes.txt}>Nombre de Personne</label>
            <input 
              className={classes.textField}
              onChange={(e) =>setPerson(e.target.value)}
              id="personn..."
              type="number"  placeholder="nombre de personne..."
             />
        </DialogContent>
        <DialogActions>
          <button className={classes.btns_cancel} onClick={handleClose}>Annuler</button>
          <button className={classes.btns} onClick={handleSubmit}>Valider</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}