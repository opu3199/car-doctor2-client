// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtYHuHyTSSUO-wrADz0-lfYOXV5WnxamI",
  authDomain: "doctor-car2.firebaseapp.com",
  projectId: "doctor-car2",
  storageBucket: "doctor-car2.appspot.com",
  messagingSenderId: "1038106947095",
  appId: "1:1038106947095:web:a5b5ebb3b0025d449b7652"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;