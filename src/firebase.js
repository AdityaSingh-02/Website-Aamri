import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQa-l3JDh_uQlmssByVnHnsbwfcm24n7o",
  authDomain: "contactform-b25f1.firebaseapp.com",
  databaseURL: "https://contactform-b25f1-default-rtdb.firebaseio.com",
  projectId: "contactform-b25f1",
  storageBucket: "contactform-b25f1.appspot.com",
  messagingSenderId: "1021173125217",
  appId: "1:1021173125217:web:4b41267a1c5df9e24a1a20",
  measurementId: "G-6DE7WNBH15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);