// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//don't share config in public
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASAIhxQlBy9XzdGUGCZQNqF0BSFpi8Vho",
  authDomain: "email-password-auth-67fad.firebaseapp.com",
  projectId: "email-password-auth-67fad",
  storageBucket: "email-password-auth-67fad.firebasestorage.app",
  messagingSenderId: "80469920995",
  appId: "1:80469920995:web:282f8d2b7859cefc6949d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
