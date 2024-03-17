
import React, { useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Grid,Button,Typography} from '@material-ui/core';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import HeaderAccount from '../../components/Header/HeaderAccount'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '95vh',
    backgroundColor: 'rgba(181, 184, 183, 0.852)',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    width: '35%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  textField: {
    width: '100%',
    margin: theme.spacing(1, 0),
    padding:'10px 0px 10px 0px'
  },
  btns:{
    backgroundColor:"green",
    fontFamily: "Times New Roman, Times, serif",
    color:"white",border:'none',
    borderRadius:'5px',
    height:"40px",
    width:"150px",
    float:"left"
  },
  appname:{
    fontFamily: "Times New Roman, Times, serif",
    fontWeight:'bold',
    fontSize:"20px",
    marginTop:"10px",
    color:"green",

  }
}));

function LoginPage() {
    const history=useHistory();
    const [email , setEmail]=useState("");
    const [username , setUsername]=useState("");
    const [password , setPassword]=useState("");
    const [open, setOpen] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault()
      setOpen(true);
      if(username=='admin' && password=='admin'){
            history.push('admin/paiement');
            setOpen(false);

      }else{
        setOpen(false);
        alert('Please Check inforamtion and try again!!')

      }
      console.log(email+' '+username+' '+password)
     
  
}

     

  const classes = useStyles();
  return (
    <div>
    <div className={classes.root}>
      <HeaderAccount/>
      <Paper className={classes.paper}>
          <div style={{textAlign:"center"}}>
              <Avatar style={{margin:'auto',textAlign:'center'}} sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
              </Avatar>
              <b  style={{padding:'20px 0px 20px 0px',fontSize:'20px',fontFamily: "Times New Roman, Times, serif",color:"#003366",textAlign:"center"}}> Se Connecter</b> 
          </div>

        <label>username</label>
        <input 
          className={classes.textField}
          onChange={(e) =>setUsername(e.target.value)}
          id="username..."
          type="text"  placeholder="Username..."
        />
      
         <label>email</label>
        <input 
          className={classes.textField}
          onChange={(e) =>setPassword(e.target.value)}
          id="password"
          type="password"  placeholder="Password..."
        />
        <Button onClick={handleSubmit} className={classes.btns} style={{backgroundColor:'#003366'}}> Se connecter </Button>
        <p><Link to="./signin" style={{padding:'20px 0px 0px 0px',fontFamily: "Times New Roman, Times, serif",fontSize:"15px",color:"#003366",float:"right"}}> <b>pas encore enregistrer?  creer un Compte</b></Link></p>
      </Paper>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

    </div>


    <Typography variant="body2" color="text.secondary" align="center" >
          {'Copyright © '}
          <Link color="inherit" href="#">
            BETULI
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    </div>
  );
}

export default LoginPage;

