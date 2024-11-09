// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe-VXBI-iLAVpoo1Y8hxGMWFTlDl3e6Nc",
  authDomain: "simple-firebase-fc904.firebaseapp.com",
  projectId: "simple-firebase-fc904",
  storageBucket: "simple-firebase-fc904.firebasestorage.app",
  messagingSenderId: "140599748141",
  appId: "1:140599748141:web:12e5b05159f943beb5faa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth