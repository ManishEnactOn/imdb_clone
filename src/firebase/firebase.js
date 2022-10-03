import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgxzgHfI3K9gPigK-21v9U_FwfIpptnRQ",
  authDomain: "fir-authentication-78716.firebaseapp.com",
  projectId: "fir-authentication-78716",
  storageBucket: "fir-authentication-78716.appspot.com",
  messagingSenderId: "906084955404",
  appId: "1:906084955404:web:5fa676c4f863246a98c529",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
