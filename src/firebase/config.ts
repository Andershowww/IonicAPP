// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { environment } from '../environments/environment';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTlgDZtIW4yCqySuWZdGNgjEt8WmsEId4",
  authDomain: "hort-assistente-app.firebaseapp.com",
  projectId: "hort-assistente-app",
  storageBucket: "hort-assistente-app.firebasestorage.app",
  messagingSenderId: "620771814251",
  appId: "1:620771814251:web:4b4e091e9a107e6ac4ba2e",
  measurementId: "G-YF86N90XM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtém uma instância do Firestore
export const db = getFirestore(app);

export default app;