// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1BjMYHeq9pzAJ0MTxunuf8TaFoW9at10",
  authDomain: "dimple-firebase-a8774.firebaseapp.com",
  projectId: "dimple-firebase-a8774",
  storageBucket: "dimple-firebase-a8774.firebasestorage.app",
  messagingSenderId: "546145045823",
  appId: "1:546145045823:web:4bb3e845096a5c4b84d78a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);