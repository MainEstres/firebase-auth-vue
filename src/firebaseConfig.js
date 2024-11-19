// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG4gMZyGVC8nKHDx30B0rT5FmUqM8HPVA",
  authDomain: "desafio-evaluado-hosting.firebaseapp.com",
  projectId: "desafio-evaluado-hosting",
  storageBucket: "desafio-evaluado-hosting.firebasestorage.app",
  messagingSenderId: "853215657879",
  appId: "1:853215657879:web:90a83e49d51b6a6f060ed2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app