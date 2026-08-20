// firebase/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWxI5m7BS2FNmvXJbZ03eBapaLfab18f4",
  authDomain: "mf-sistemadegestion.firebaseapp.com",
  projectId: "mf-sistemadegestion",
  storageBucket: "mf-sistemadegestion.firebasestorage.app",
  messagingSenderId: "859616873902",
  appId: "1:859616873902:web:e5d0ff5e35b5df97decc3f",
  measurementId: "G-YG8N99M5YF"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos para usarla en otros archivos
export const db = getFirestore(app);