// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYGYeIeMfNe8AHBFyxjMs5-VcvwZyWnNU",
  authDomain: "ticketopia-2ba0d.firebaseapp.com",
  projectId: "ticketopia-2ba0d",
  storageBucket: "ticketopia-2ba0d.appspot.com",    
  messagingSenderId: "32436225697",
  appId: "1:32436225697:web:23c66d006fdbbf92c392e0",
  measurementId: "G-1691SB7PH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);