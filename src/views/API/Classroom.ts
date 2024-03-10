
export interface Classroom {
  classRoomId: number;
  name: string;
  transactionId: string;
  createdDate: string
  }
    
  let url='https://jsonplaceholder.typicode.com/posts';
  
  
  export function postClassroom(data: Classroom): Promise<void> {
    // fonction pour envoyer les données vers l'API
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  }
  
  export function getClassroom(): Promise<Classroom[]> {
    // fonction pour récupérer les données de l'API
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.error('Erreur lors de la récupération des données', error);
        return [];
      });
  }
  
  
  
  // Fichier JS : index.js
  //import { postClassroom, getClassroom } from './api';
  
  // Envoi les données utilisateur à l'API
  const sendData = async () => {
    const data = {
      classRoomId: 1,
      name: 'SIL',
      transactionId: '1',
      createdDate:'15-05-2023'
    };
    await postClassroom(data);
  }
  
  // Récupère et affiche les données utilisateur depuis l'API
  const fetchData = async () => {
    const Classroom = await getClassroom();
    console.log(Classroom);
  }
  
  sendData();
  fetchData();
  
  