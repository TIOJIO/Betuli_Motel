import React, { useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {Box, Grid,Button,Typography} from '@material-ui/core';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import HeaderAccount from '../../components/Header/HeaderAccount'
import CircularProgress from '@mui/material/CircularProgress';
import { initializeApp } from 'firebase/app';
import { collection,getStorage,uploadBytesResumable , addDoc ,setDoc, doc, query, orderBy, onSnapshot, QuerySnapshot, deleteDoc} from 'firebase/firestore';
import { db } from '../../Firebase/Config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDownloadURL, listAll, ref,uploadBytes } from "firebase/storage";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Upload } from '../../Firebase/Upload';
import { v4 } from 'uuid';

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
    height: 'auto',
    backgroundColor: 'rgba(181, 184, 183, 0.852)',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    marginTop:'90px',
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
    color:"rgb(18, 129, 219)",

  }
}));



function LoginPage() {
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const [open, setOpen] = React.useState(false);
    const history=useHistory();
    const [email , setEmail]=useState("");
    const [username , setUsername]=useState("");
    const [password , setPassword]=useState("");
    const [image , setImage]=useState("");
    const [numero , setNumero]=useState(0);
 

const handleClose = () => {
      setOpen(false);
    };


const handleSignUp = async () => {
    setOpenBackdrop(true);
    

  try {
      if (email=='' || password=='') {
        console.log("veillez remplir toute les information")

      } else {
       
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Utilisateur enregistré avec succès:', user.uid);
        handleSaveUser(username,numero,password,email);
        history.push('login');
        return user;
      }
      
    } catch (error) {
      setOpenBackdrop(false);
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
      throw error;
    }
  };

  const handleSaveUser= async () =>{
 
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, "0");
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentHeure = date.getHours();
    let currentMinute = date.getMinutes();
    let currentYear = date.getFullYear();
    let currentDate = `${currentDay}-${currentMonth}-${currentYear} ${currentHeure}:${currentMinute}`;

      const imgref = ref(Upload,`utilisateurs/${v4()}`);
      await uploadBytes(imgref,image); 
       const snapshoturl =  await getDownloadURL(imgref);
      // setImageUrl(snapshoturl);
      console.log('upload success');

      
        const id=Date.now().toString();  
        setDoc(doc(db, "Utilisateurs", id), {
          username: username,
          email:email ,
          password: password,
          phone: numero,
          profile:snapshoturl,
          isAdmin: false,
          dateCreation:currentDate
        }).then(()=>{
             //setLoading(false);
             const userInfo={
              'username':username,
              'email':email,
              'password':password,
              'profile':snapshoturl,
              'numero':numero,
              'isLogin':true,
            }
  
              localStorage.setItem("userInfo", JSON.stringify(userInfo));
             console.log('succesful');
             setOpenBackdrop(false);
             setOpen(true)
 
        }).catch((error)=>{
            console.log(error)
        });
    
         setUsername('');
         setEmail('');
         setPassword('');
         setNumero('');

  }
  
  const onImageChange= (event) => {
    if(event.target.files && event.target.files[0]){
        let image =event.target.files[0];
        setImage(image);
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
        
          <label>Nom Utilisateur</label>
        <input 
          className={classes.textField}
          onChange={(e) =>setUsername(e.target.value)}
          id="username..."
          type="text"  placeholder="Username..."
           variant="outlined"
        />

        <label>email</label>
        <input 
          className={classes.textField}
          onChange={(e) =>setEmail(e.target.value)}
          id="email..."
          type="text"   placeholder="Email..."
          variant="outlined"
        />

       <label>Numero</label>
        <input 
          className={classes.textField}
          onChange={(e) =>setNumero(e.target.value)}
          id="numero..."
          type="number"   placeholder="Numero..."
          variant="outlined"
        />
        <label>Image de Profile</label>
        <input 
            type="file" id='img' name="myImage"  onChange={onImageChange} 
        />

         
         <label>Password</label>
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
        open={openBackdrop}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar
          open={open} 
          autoHideDuration={7000} 
          onClose={handleClose}
          key={'bottom' + 'right'}
        >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Utilisateur créer avec succèss!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default LoginPage;

