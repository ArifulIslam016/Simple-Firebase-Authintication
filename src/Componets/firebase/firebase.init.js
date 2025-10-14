// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk8kZcbBekKUKQc737bV-Q0TMThYGEVIg",
  authDomain: "simple-react-authintications.firebaseapp.com",
  projectId: "simple-react-authintications",
  storageBucket: "simple-react-authintications.firebasestorage.app",
  messagingSenderId: "959336908069",
  appId: "1:959336908069:web:aa0b40ad72a796428d86cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=new getAuth(app)