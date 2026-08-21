// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWxI5m7BS2FNmvXJbZ03eBapaLfab18f4",
  authDomain: "mf-sistemadegestion.firebaseapp.com",
  projectId: "mf-sistemadegestion",
  storageBucket: "mf-sistemadegestion.firebasestorage.app",
  messagingSenderId: "859616873902",
  appId: "1:859616873902:web:e5d0ff5e35b5df97decc3f",
  measurementId: "G-YG8N99M5YF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);