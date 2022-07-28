// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdLy6iHaqt6tjbqFglgHeqp1tww23cfjY",
  authDomain: "autentificacion-bc5d2.firebaseapp.com",
  projectId: "autentificacion-bc5d2",
  storageBucket: "autentificacion-bc5d2.appspot.com",
  messagingSenderId: "11625755364",
  appId: "1:11625755364:web:2bb673f2d336e53225b2f1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp