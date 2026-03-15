// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delivery-34b71.firebaseapp.com",
  projectId: "vingo-food-delivery-34b71",
  storageBucket: "vingo-food-delivery-34b71.firebasestorage.app",
  messagingSenderId: "662873930895",
  appId: "1:662873930895:web:376d97253de556fe24c4fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}
