import React , {useState} from 'react'
import { collection,getStorage,ref,getDownloadURL,uploadBytesResumable , addDoc ,setDoc, doc, query, orderBy, onSnapshot, QuerySnapshot, deleteDoc} from 'firebase/firestore';
import { db } from '../Firebase/Config';
import c1 from '../assets/img/c1.jpeg';
import c2 from '../assets/img/c2.jpeg';
import c3 from '../assets/img/c3.jpeg';
import c4 from '../assets/img/c4.jpeg';
import c5 from '../assets/img/c5.jpeg';
import c6 from '../assets/img/c6.jpeg';


export default function handleGetUsers() {
    const [Datas , setDatas]=useState([]);

    const storedData = JSON.parse(localStorage.getItem('chambres')) || [];
    if (storedData.length===0) {
       console.log('pas de donne');
    } else {
        setDatas(storedData);
       console.log('donner trouver')
    }
    
    const collectionRef = collection(db,'Chanbres');
    const q= query(collectionRef , orderBy('name','desc'));
    const unsuscribe = onSnapshot(q, querySnapshot =>{
            const items =  querySnapshot.docs.map(doc  =>({
                     name: doc.data().name,
                     categorie:doc.data().categorie ,
                     prix: doc.data().prix,
                     etoile: doc.data().etoile,
                     numero:doc.data().numero,
                     photo:doc.data().photo,
                     desc : doc.data().desc,
                     date: doc.data().date,
               }))
     console.log(items);
      if (items.length===0) {
         console.log('no data found')
      }else{
        Datas=items;
      }
 })     
     return Datas;
}



