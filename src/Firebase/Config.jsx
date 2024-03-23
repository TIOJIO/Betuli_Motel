// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE0ExiiNIjYis-EamnnSbiLK7-Uvn7Lng",
  authDomain: "heaven-7bc01.firebaseapp.com",
  projectId: "heaven-7bc01",
  storageBucket: "heaven-7bc01.appspot.com",
  messagingSenderId: "582576265146",
  appId: "1:582576265146:web:91a2e998868a05827eef83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);