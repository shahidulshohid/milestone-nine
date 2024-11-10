// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyrdA07tS_4JwgJwUYb18rBwi9AlUogbU",
  authDomain: "auth-moha-milon-6e834.firebaseapp.com",
  projectId: "auth-moha-milon-6e834",
  storageBucket: "auth-moha-milon-6e834.firebasestorage.app",
  messagingSenderId: "428751723503",
  appId: "1:428751723503:web:6c44d37fa8b257d54b341a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);