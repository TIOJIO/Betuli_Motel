import React , {useState , useEffect} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footers';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Log from "../../assets/img/log.png";
import Banner from "../../assets/img/bag.jpeg";
import Agile from "../Agile/Agile";
import CardCambre from '../../components/Card/CardChambre'
import DataChambre from '../../components/Card/DataChambre'
import Tabs from '@mui/material/Tabs';
import TrapFocus from '@mui/base/TrapFocus';
import Tab from '@mui/material/Tab';
import { Box } from '@material-ui/core';
import ViewAllCategorie from '../../components/ViewAllCategorie/ViewAllCategorie'
import BestChambre from '../../components/ViewAllCategorie/BestChambre'
import Welcom from '../../components/Welcom/Welcom'
import Chat from '../../components/Chat/Chat'
import Loading from '../../assets/img/loading2.gif'
import { collection,getStorage,ref,getDownloadURL,uploadBytesResumable , addDoc ,setDoc, doc, query, orderBy, onSnapshot, QuerySnapshot, deleteDoc} from 'firebase/firestore';
import { db } from '../../Firebase/Config';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const HomePage = (props) => {
  const [value, setValue] = React.useState('one');
  const [load, setLoad] = React.useState(true);
  const [view, setView] = React.useState(false);
  const [contacts , setContacts] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
      handleGetChambre();
   },[])

   
   const handleGetChambre = () =>{
  
    const storedData = JSON.parse(localStorage.getItem('chambres')) || [];
    if (storedData.length===0) {
       console.log('pas de donne');
       setLoad(false);
       setView(true);
    } else {
       setContacts(storedData);
       setLoad(false);
       setView(true);
       console.log('donner trouver')
    }
    



    const collectionRef = collection(db,'Chanbres');
    const q= query(collectionRef);
    const unsuscribe = onSnapshot(q, querySnapshot =>{
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
                  setLoad(false);
                  setView(true);
                   //setContacts(items);
                }
                
                
 })     
     return ;
   }


   
   console.log(contacts.length)
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

         {view && (
        <TrapFocus view>
          <Box tabIndex={-1}  style={{ width:'100%'}} >
          <div style={{ backgroundColor:'white' }}>
          <Header isLogin={false}/>
          <Welcom/>

          <br></br>
          <br></br>
          <br></br>
          <span style={{textAlign:'center',backgroundColor:'white'}}>
               <h1 style={{color:'black'}}> Découvez une  destination de rêve pour un doux repos et <br></br> 
                 vivez une experience unique dans un cadre serein et luxueux
               </h1>
          </span>

          <ViewAllCategorie contacts={contacts}/>

          <br></br>
          <br></br>
          <span style={{textAlign:'center'}}>
               <h1 style={{color:'black'}}> Découvez une  destination de rêve pour un doux repos et <br></br> 
                 vivez une experience unique dans un cadre serein et luxueux
               </h1>
               <h1 style={{color:'#003366'}}> Nos Meilleur chambres</h1>
          </span>
          

         
         <br></br><br></br>
          
          
          <BestChambre contacts={contacts}/>

   
          <br></br><br></br>

          

           <Chat/>
           
          <Footer/>
                 
     </div>
    
          </Box>
        </TrapFocus>
      )}
  
      
     </div>
    );
  
}

export default HomePage;
