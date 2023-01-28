// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from"firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAxFIECVM684X8Dh-3iigx9vSlkgF4exps",
  authDomain: "signup-ae6e0.firebaseapp.com",
  projectId: "signup-ae6e0",
  storageBucket: "signup-ae6e0.appspot.com",
  messagingSenderId: "879798214875",
  appId: "1:879798214875:web:d30f2bc35457afb3256cfe",
  measurementId: "G-WKDMEPQ8W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};