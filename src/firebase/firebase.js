// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChf16ivIDwOGRG_BORXaMLxrszPhRdVV0",
  authDomain: "fir-authentication-aa605.firebaseapp.com",
  projectId: "fir-authentication-aa605",
  storageBucket: "fir-authentication-aa605.appspot.com",
  messagingSenderId: "480241915817",
  appId: "1:480241915817:web:7ae332b31788cd31d316b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
