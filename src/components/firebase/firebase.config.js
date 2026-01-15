// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBInZdhZlHBQ4SF3SeGtFXIZCXOEVpopwk",
  authDomain: "book-app-631c2.firebaseapp.com",
  projectId: "book-app-631c2",
  storageBucket: "book-app-631c2.firebasestorage.app",
  messagingSenderId: "1036812992026",
  appId: "1:1036812992026:web:34a78cd905e4f4f7fc5ba3",
  measurementId: "G-D9LRWS6Z54"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
