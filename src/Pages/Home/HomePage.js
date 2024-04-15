import React , {useState , useEffect} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footers';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Banner from "../../assets/img/bag.jpeg";
import Agile from "../Agile/Agile";
import CardCambre from '../../components/Card/CardChambre'
import ChambreInfo from '../ChambreInfo/ChambreInfo'
import Load from '../../assets/img/loading2.gif'
import TrapFocus from '@mui/base/TrapFocus';
import Slide from "@mui/material/Slide";
import { Box } from '@material-ui/core';
import ViewAllCategorie from '../../components/ViewAllCategorie/ViewAllCategorie'
import BestChambre from '../../components/ViewAllCategorie/BestChambre'
import Welcom from '../../components/Welcom/Welcom'
import Chat from '../../components/Chat/Chat'
import Loading from '../../assets/img/loading2.gif'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { collection,getStorage,uploadBytesResumable , addDoc ,setDoc, doc, query, orderBy, onSnapshot, QuerySnapshot, deleteDoc} from 'firebase/firestore';
import { db } from '../../Firebase/Config';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HomePage = (props) => {
  const [value, setValue] = React.useState('one');
  const [load, setLoad] = React.useState(true);
  const [chambreInfo, setChambreInfo] = React.useState(false);
  const [view, setView] = React.useState(false);
  const [contacts , setContacts] = useState([]);
  const [selectedContacts , setSelectedContacts] = useState([]);
  const [userSession, setUserSession] = useState([]);
  const [openSnakBar, setOpenSnakBar] = React.useState(false);
  const [openSnakBarError, setOpenSnakBarError] = React.useState(false);
  const [openLoading, setOpenLoading] = React.useState(false);




  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
      handleGetChambre();
      handlegetSessionUser();
   },[])

   
   const handlegetSessionUser = () =>{
   
    const storedData = JSON.parse(localStorage.getItem('UserSession')) || [];
    if (storedData.length===0) {
       console.log('pas de donne');
  
    } else {
       setUserSession(storedData);
       console.log('donner trouver')
    }
  }


   const handleGetChambre = () =>{
  
    const storedData = JSON.parse(localStorage.getItem('chambres')) || [];
    if (storedData.length===0) {
       console.log('pas de donne');
       if (chambreInfo===true) {
        setLoad(false);
        setView(false);
        setChambreInfo(true)
       } else {
        setLoad(false);
        setView(true);
        setChambreInfo(false)
       }
       

    } else {
       setContacts(storedData);
       if (chambreInfo===true) {
        setLoad(false);
        setView(false);
        setChambreInfo(true)
       } else {
        setLoad(false);
        setView(true);
        setChambreInfo(false)
       }
       console.log('donner trouver')
    }
    
    const collectionRef = collection(db,'Chanbres');
    const q= query(collectionRef);
     onSnapshot(q, querySnapshot =>{
            const items =  querySnapshot.docs.map(doc  =>({
                name :doc.data().name,
                img :doc.data().img,
                prix :doc.data().prix,
                categorie :doc.data().categorie,
                start :doc.data().start,
                available:doc.data().available,
                personn:doc.data().personn,
                description:doc.data().description,
                createdBy:doc.data().createdBy,
                createdDate:doc.data().createdDate
               }))
                console.log(items);
                console.log(items.length);

                if(items.length === 0){
                  console.log("pas de nouvelle donné");
                }else{
                  localStorage.setItem("chambres", JSON.stringify(items));
                  if (chambreInfo===true) {
                    setLoad(false);
                    setView(false);
                    setChambreInfo(true)
                   } else {
                    setLoad(false);
                    setView(true);
                    setChambreInfo(false)
                   }
                   //setContacts(items);
                }
                
                
 })     
     return ;
   }


   const handleAddToCard = async (items) => {

    setOpenLoading(true);
   try {
      
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, "0");
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentHeure = date.getHours();
    let currentMinute = date.getMinutes();
    let currentYear = date.getFullYear();
    let currentDate = `${currentDay}-${currentMonth}-${currentYear} ${currentHeure}:${currentMinute}`;


      const id=Date.now().toString();
      
      setDoc(doc(db, "Card", id), {
      identifiant:id,
      name :items.name,
      img :items.img,
      prix :items.prix,
      categorie :items.categorie,
      start :items.start,
      available:true,
      personn:items.personn,
      description:items.description,
      createdBy:items.createdBy,
      createdDate:currentDate,
      statut:'incomplet',
      
      usernameSession:userSession.username,
      emailSession:userSession.email,
      profileSession:userSession.profile,
      passwordSession:userSession.password,
      id:userSession.id,

    }).then(()=>{
         console.log('succesful');
         setOpenLoading(false);
         setOpenSnakBar(true);
  
    }).catch((error)=>{
        console.log('erreur :'+error);
        setOpenLoading(false);
        setOpenSnakBarError(true)

    });
      
    } catch (error) {
      console.log(error)
      setOpenSnakBarError(true)
      setOpenLoading(false);
    }
      
} 


const handleSelectedChambre =(items)=>{
    setSelectedContacts(items);
    setView(false);
    setLoad(false);
    setChambreInfo(true)
}
   
const handleCloseSnak =()=>{
  setOpenSnakBar(false)
 }

 const handleCloseSnakError =()=>{
  setOpenSnakBarError(false)
 }

 const handleCloseLoading = () => {
  setOpenLoading(false);
};
    return (
      <div>
           
       {load && (
        <TrapFocus load>
            <Box tabIndex={-1}  style={{ width:'100%' }} >
                <div style={{width:'100%',textAlign:'center'}}>
                  <img src={Loading} width={100} style={{margin:'auto',marginTop:'200px'}} height={100}/>
                  <p tyle={{margin:'auto',marginTop:'200px'}}>Veillez patientez...</p>
                </div>
            </Box>
        </TrapFocus>
      )}

     {chambreInfo && (
        <TrapFocus chambreInfo>
            <Box tabIndex={-1}  style={{ width:'100%' }} >
            <div style={{ backgroundColor:'#0033663d' }}>
               <Header isLogin={false}/>
                <br></br>
               <ChambreInfo 
                  handleAddToCard={handleAddToCard}
                  selectedContacts={selectedContacts}
              /> 

               <br></br>
               <br></br>
               <Footer/>
            </div>


            
            </Box>
        </TrapFocus>
       )}

         {view && (
        <TrapFocus view>
          <Box tabIndex={-1}  style={{ width:'100%'}} >
          <div style={{ backgroundColor:'white' }}>
          <Header />
          <Welcom/>

          <br></br>
          <br></br>
          <br></br>
          <span style={{textAlign:'center',backgroundColor:'white'}}>
               <h1 style={{color:'black'}}> Découvez une  destination de rêve pour un doux repos et <br></br> 
                 vivez une experience unique dans un cadre serein et luxueux
               </h1>
          </span>

          <ViewAllCategorie 
                handleSelectedChambre={handleSelectedChambre} 
                handleAddToCard={handleAddToCard} 
                contacts={contacts}
          />

          <br></br>
          <br></br>
          <span style={{textAlign:'center'}}>
               <h1 style={{color:'black'}}> Découvez une  destination de rêve pour un doux repos et <br></br> 
                 vivez une experience unique dans un cadre serein et luxueux
               </h1>
               <h1 style={{color:'#003366'}}> Nos Meilleur chambres</h1>
          </span>
          

         
         <br></br><br></br>
          
          
          <BestChambre handleSelectedChambre={handleSelectedChambre} contacts={contacts}/>

   
          <br></br><br></br>

          

           <Chat/>
           
          <Footer/>
                 
     </div>

     
    
          </Box>
        </TrapFocus>
      )}
  
      
     <Snackbar
          open={openSnakBarError} 
          autoHideDuration={5000} 
          onClose={handleCloseSnakError}
          key={'bottom' + 'right'}
        >
        <Alert
           onClose={handleCloseSnak}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Une erreur est survenu Veillez réessaye!
        </Alert>
      </Snackbar>

      <Snackbar
          open={openSnakBar} 
          autoHideDuration={5000} 
          onClose={handleCloseSnak}
          key={'bottom' + 'right'}
        >
        <Alert
           onClose={handleCloseSnak}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Ajout au panier effectuer avec succèss!
        </Alert>
      </Snackbar>

      <Dialog
        open={openLoading}
        TransitionComponent={Transition}
        onClose={handleCloseLoading}
        maxWidth="xs"
        fullWidth="false"
        aria-labelledby="draggable-dialog-title"
      >
        <DialogContent style={{ textAlign: "center" }}>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <img src={Load} width={80} height={50} />
            <p
              style={{
                marginTop: "10px",
                cursor: "move",
                color: "green",
                fontWeight: "bold",
              }}
            >
               Veillez patientez...
            </p>
          </span>
             </DialogContent>
            </Dialog> 
     </div>
    );
  
}

export default HomePage;
