
import { Transaction } from "./Transaction";
import { Student } from "./Students";

interface Payment {
  studentId:number,
  studentName:string,
  transactionId:number,
  Amount:number ,
  className:string,
  classRoomId:number,
  paymentState : boolean,
  date: string;
  }
  
  let url='https://jsonplaceholder.typicode.com/posts';
  
  
  export function postPayment(data: Payment): Promise<void> {
    // fonction pour envoyer les données vers l'API
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  }
  
  export function getPayment(): Promise<Payment[]> {
    // fonction pour récupérer les données de l'API
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.error('Erreur lors de la récupération des données', error);
        return [];
      });
  }
  
  
  
  // Fichier JS : index.js
  //import { postStudent, getStudent } from './api';
  
  // Envoi les données utilisateur à l'API
  const sendData = async () => {
    const data = {
      studentId:1,
      studentName:'romain karl',
      transactionId:1,
      Amount:50000 ,
      className:'SIL',
      classRoomId:1,
      paymentState : true,
      date:'12-06-2023',
    };
    await postPayment(data);
  }
  
  // Récupère et affiche les données utilisateur depuis l'API
  const fetchData = async () => {
    const Payment = await getPayment();
    console.log(Payment);
  }
  
  sendData();
  fetchData();
  
  