
 export interface Student {
    studentId: number;
    classRoomId: number;
    name: string;
    classroomName: string;
    matricule: string;
    birthday:number;

  }
  
  let url='https://jsonplaceholder.typicode.com/posts';
  
  
  export function postStudent(data: Student): Promise<void> {
    // fonction pour envoyer les données vers l'API
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  }
  
  export function getStudent(): Promise<Student[]> {
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
      studentId: 1,
      classRoomId: 1,
      name: 'romain karl',
      classroomName: 'SIL',
      matricule: '#1234',
      birthday:12,
    };
    await postStudent(data);
  }
  
  // Récupère et affiche les données utilisateur depuis l'API
  const fetchData = async () => {
    const Student = await getStudent();
    console.log(Student);
  }
  
  sendData();
  fetchData();
  
  