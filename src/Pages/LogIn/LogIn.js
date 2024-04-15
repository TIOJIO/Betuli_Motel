
import React, { useState,useContext , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Grid,Button,Typography} from '@material-ui/core';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import HeaderAccount from '../../components/Header/HeaderAccount'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection,getStorage,ref,getDownloadURL,uploadBytesResumable , addDoc ,setDoc, doc, query, orderBy, onSnapshot, QuerySnapshot, deleteDoc} from 'firebase/firestore';
import { Password } from '@mui/icons-material';
import { db } from '../../Firebase/Config';


const firebaseConfig = {
  apiKey: "AIzaSyDE0ExiiNIjYis-EamnnSbiLK7-Uvn7Lng",
  authDomain: "heaven-7bc01.firebaseapp.com",
  projectId: "heaven-7bc01",
  storageBucket: "heaven-7bc01.appspot.com",
  messagingSenderId: "582576265146",
  appId: "1:582576265146:web:91a2e998868a05827eef83"
};
// Initialiser l'application Firebase
const app = initializeApp(firebaseConfig);

// Obtenir l'instance de l'authentification Firebase
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
    const [userSession , setUserSession]=useState([]);
    const [email , setEmail]=useState("");
    const [username , setUsername]=useState("");
    const [password , setPassword]=useState("");
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [open, setOpen] = React.useState(false);

 

   const handlegetSessionUser = () =>{
 
        try {
          const collectionRef = collection(db,'Utilisateurs');
        const q= query(collectionRef , orderBy('username','desc'));
         onSnapshot(q, querySnapshot =>{
         const users= querySnapshot.docs.map(doc =>({
                   id:doc.id,
                   username :doc.data().username,
                   email :doc.data().email,
                   password :doc.data().password,
                   profile :doc.data().profile,
                   numero :doc.data().numero,
                   isLogin :doc.data().isLogin,
                   
             }))


             const FilterUserSession = users.filter( user => user.email===email && user.password===password );

             const UserSession = {
              id:FilterUserSession[0].id,
              username :FilterUserSession[0].username,
              email :FilterUserSession[0].email,
              password :FilterUserSession[0].password,
              profile :FilterUserSession[0].profile,
              numero :FilterUserSession[0].numero,
              isLogin :FilterUserSession[0].isLogin,
           };
    
            

            localStorage.setItem("UserSession", JSON.stringify(UserSession));
            history.push('home');
               
       })
        } catch (error) {
          console.log(error)
        } 
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      setOpenBackdrop(true);
      try {
        if (email==null || password==null) {
          console.log('veillez remplir tout les champs !')
 
        } else {
         const userCredential = await signInWithEmailAndPassword(auth, email, password);
         const user = userCredential.user;
         console.log('Utilisateur connecté avec succès:', user.uid);
         setOpenBackdrop(false);
         setOpen(true)
         if(username=='admin' && password=='admin'){
             history.push('admin/paiement');
          }

          handlegetSessionUser()
          
        }
       return user;
      } catch (error) {
        console.error('Erreur lors de la connexion de l\'utilisateur:', error);
        throw error;
      }

      
     
  
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

        <label>email</label>
        <input 
          className={classes.textField}
          onChange={(e) =>setEmail(e.target.value)}
          id="username..."
          type="text"  placeholder="email..."
        />
      
         <label>Password</label>
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
        open={openBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

    </div>

      <Snackbar
          open={open} 
          autoHideDuration={7000} 
          key={'bottom' + 'right'}
        >
        <Alert
          
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Utilisateur Connecté succèss!
        </Alert>
      </Snackbar>


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

