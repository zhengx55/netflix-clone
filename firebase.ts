// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBop_gAuxrgB2NV-qwA06VWwAicWy5yVdo",
  authDomain: "netflix-clone-db4a6.firebaseapp.com",
  projectId: "netflix-clone-db4a6",
  storageBucket: "netflix-clone-db4a6.appspot.com",
  messagingSenderId: "353599274920",
  appId: "1:353599274920:web:2cd72fe15ed4b86f56279d",
  measurementId: "G-EGJCYNLCCB",
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
