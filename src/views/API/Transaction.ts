
export interface Transaction {
  transactionId:number;
  transactionTyp:string,
  amount: number;
  date: string;
}

let url='https://jsonplaceholder.typicode.com/posts';


export function postTransaction(data: Transaction): Promise<void> {
  // fonction pour envoyer les données vers l'API
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}

export function getTransaction(): Promise<Transaction[]> {
  // fonction pour récupérer les données de l'API
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Erreur lors de la récupération des données', error);
      return [];
    });
}



// Fichier JS : index.js
//import { postTransactionData, getTransactionData } from './api';

// Envoi les données utilisateur à l'API
const sendData = async () => {
  const data = {
    transactionId:1,
    transactionTyp:'Inscription',
    amount: 50000,
    date:'12/02/2023 ',
  };
  await postTransaction(data);
}

// Récupère et affiche les données utilisateur depuis l'API
const fetchData = async () => {
  const Transaction = await getTransaction();
  console.log(Transaction);
}

sendData();
fetchData();

