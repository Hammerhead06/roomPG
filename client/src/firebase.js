// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "roompg.firebaseapp.com",
  projectId: "roompg",
  storageBucket: "roompg.appspot.com",
  messagingSenderId: "144156977138",
  appId: "1:144156977138:web:2804721c07adaa8e66ad6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
