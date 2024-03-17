
import React, { useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {Box, Grid,Button,Typography} from '@material-ui/core';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import HeaderAccount from '../../components/Header/HeaderAccount'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDE0ExiiNIjYis-EamnnSbiLK7-Uvn7Lng",
  authDomain: "heaven-7bc01.firebaseapp.com",
  projectId: "heaven-7bc01",
  storageBucket: "heaven-7bc01.appspot.com",
  messagingSenderId: "582576265146",
  appId: "1:582576265146:web:91a2e998868a05827eef83"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


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
    padding: theme.spacing(3),
    marginTop:'40px',
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
    backgroundColor:"#003366",
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
    color:"#003366",

  }
}));



function LoginPage() {
  const [open, setOpen] = React.useState(false);
    const history=useHistory();
    const [email , setEmail]=useState("");
    const [username , setUsername]=useState("");
    const [password , setPassword]=useState("");


const handleClose = () => {
      setOpen(false);
    };


const handleSignUp = async () => {
     setOpen(true);
    try {
      if (email=='' || password=='') {
        console.log("veillez remplir toute les information")

      } else {
       
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Utilisateur enregistré avec succès:', user.uid);
        setOpen(false);
        return user;
      }
      
    } catch (error) {
      setOpen(false);
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
      throw error;
    }
  };

     

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
              <b  style={{padding:'20px 0px 20px 0px',fontSize:'20px',fontFamily: "Times New Roman, Times, serif",textAlign:"center"}}> Créer un compte </b> 

          </div>
        
          <label>username</label>
        <input 
          className={classes.textField}
          onChange={(e) =>setUsername(e.target.value)}
          id="username..."
          type="text"  placeholder="Username..."
           variant="outlined"
        />

        <p>email</p>
        <input 
          className={classes.textField}
          onChange={(e) =>setEmail(e.target.value)}
          id="email..."
          type="text"   placeholder="Email..."
          variant="outlined"
        />
         
         <p>Password</p>
         <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <input
                  className={classes.textField}
                  onChange={(e) =>setPassword(e.target.value)}
                  id="password"
                  type="password"  placeholder="Password..."
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  className={classes.textField}
                  onChange={(e) =>setPassword(e.target.value)}
                  id="password"
                  type="password"  placeholder="Confirm Password..."
                  variant="outlined"
                />
              </Grid>
        </Grid>

        <Button onClick={handleSignUp} className={classes.btns}> s'enregistrer </Button>
        <p><Link to="./login" style={{padding:'20px 0px 0px 0px',fontFamily: "Times New Roman, Times, serif",color:"black",fontSize:"15px",float:"right"}}> <b>vous avez deja un compte? connectez-vous</b></Link></p>

      </Paper>
      
    </div>

        <Typography variant="body2" color="text.secondary" align="center" >
          {'Copyright © '}
          <Link color="inherit" href="#">
            BETULI
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>

        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default LoginPage;


/*
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

*/