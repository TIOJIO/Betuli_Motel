import React , {useState , useEffect} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footers';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Deroul from './Deroul';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Log from '../../assets/img/c1.jpeg';
import SkeletonLoading from './SkeletonLoading'
import TrapFocus from '@mui/base/TrapFocus';
import { collection,getStorage,uploadBytesResumable , addDoc ,setDoc, doc, query, orderBy, onSnapshot, QuerySnapshot, deleteDoc} from 'firebase/firestore';
import { db } from '../../Firebase/Config';
import {useHistory} from 'react-router-dom';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const HomePage = (props) => {
  const history=useHistory();

  const [load, setLoad] = React.useState(true);
  const [view, setView] = React.useState(false);
  const [contacts , setContacts] = useState([]);
  const [userSession, setUserSession] = useState([]);


  useEffect(()=>{
    handleGetChambre();
    
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
  handlegetSessionUser();
  const storedData = JSON.parse(localStorage.getItem('card')) || [];
  if (storedData.length===0) {
     console.log('pas de donne');
  } else { 
    const OffreSession = storedData.filter( item => item.emailSession===userSession.email && item.passwordSession===userSession.password )
    console.log(OffreSession) 
   
    setContacts(storedData);
     setLoad(false);
     setView(true);
     console.log('donner trouver')
  }
  
  const collectionRef = collection(db,'Card');
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
              createdDate:doc.data().createdDate,

              usernameSession:doc.data().usernameSession,
              emailSession:doc.data().emailSession,
              profileSession:doc.data().profileSession,
              passwordSession:doc.data().passwordSession,
              id:doc.data().id,
             }))
              console.log(items);
              console.log(items.length);

              if(items.length === 0){
                console.log("pas de nouvelle donné");
              }else{
                localStorage.setItem("card", JSON.stringify(items));
                setLoad(false);
                setView(true);
                 //setContacts(items);
              }
              
              
})     
   return ;
 }

  const handleDeleteChambre =  async(id) =>{
     try {
       await db.collection('Card').doc(id).delete();
       //handleGetChambre()
       console.log('delete succesful')
      
      } catch (error) {
          console.log('Erreur de suppereeion  '+error)
      }
  }

  const handlePay =() =>{
       history.push('https://demo.campay.net/pay/betuli-3176-1713197349-WPX/');
  }
    return (
      <div style={{ backgroundColor:'rgba(233, 232, 232, 0.829)'}}>
          <Header isLogin={true}/>
          
             <br></br>
             <br></br>
             <br></br>

        {load && (
        <TrapFocus load>
            <Box tabIndex={-1}  style={{ width:'95%',margin:'auto' }} >
                <SkeletonLoading/>
            </Box>
        </TrapFocus>
      )}

      
      {view && (
        <TrapFocus view>
            <Grid container style={{width:'95%',margin:'auto'}}>
              <Grid style={{width:'95%', display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
              
              <Grid style={{width:'70%'}}>
                {
                  contacts.map(item=>(
                    <Grid style={{width:'100%'}}>     
                    <Paper
                elevation={0}
                sx={{
                  p: 2,
                  margin: 'auto',
                  maxWidth: '100%',
                  flexGrow: 1,
                }}
              >                  
                  <Grid style={{flexWrap:'wrap',display:'flex',width:'100%',justifyContent:'space-between'}} >
                   <Grid style={{width:'30%'}} >
                        <Img width={200} height={200} src={item.img}/>
                    </Grid>
                    <Grid style={{width:'70%'}} >
                      
                       <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                          <h1>CHAMBRE : {item.name}</h1>
                          <Deroul 
                              item={item}
                              handleDeleteChambre={handleDeleteChambre}
                           />
                       </div>

                      <h1 style={{fontWeight:'bold',color:'#003366'}}> {item.prix} XAF</h1>
                      <p>{item.description}</p>
                      
                      <div style={{display:'flex',fontWeight:'bold',alignContent:'center',alignItems:'center',height:'auto'}}>
                         <p>Statut : </p> &nbsp;&nbsp;
                         <p style={{color:'red'}}>Incomplet</p> &nbsp;&nbsp;
                         <Button onClick={()=>handlePay()} color="success" style={{borderRadius:'50px',fontSize:'12px',backgroundColor:'green',color:'white'}} variant="outlined" > <AccessTimeFilledIcon/>&nbsp; Payer</Button> &nbsp;&nbsp;&nbsp;

                      </div>

                    </Grid>
                    
                  </Grid>
                    </Paper>
                    <br></br>
                    </Grid>
                  ))
                }
               </Grid>

                <Grid style={{width:'20%'}}>
                <Paper
            elevation={0}
            sx={{
              p: 2,
              margin: 'auto',
              width: '100%',
              height:'300px'
            }}
          >
                    <h1 style={{color:'#003366'}}>Mes Reservations</h1>
                    <p style={{fontWeight:'bold'}}>Total : <label style={{color:'green'}}> {contacts.length} Chambres </label> </p>
                    </Paper>
                </Grid>

              </Grid>
            </Grid>
            </TrapFocus>
      )}
         

         <br></br>
             <br></br>
             <br></br>
          <Footer/>
                 
    </div>
     
    );
  
}

export default HomePage;

