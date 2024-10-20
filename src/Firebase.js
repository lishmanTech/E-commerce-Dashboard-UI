// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDEdmmMWnSOf4aH4LsnZGxnJ_Y5rrHV61I",
  authDomain: "e-commerce-ui-39f35.firebaseapp.com",
  projectId: "e-commerce-ui-39f35",
  storageBucket: "e-commerce-ui-39f35.appspot.com",
  messagingSenderId: "894661696260",
  appId: "1:894661696260:web:f5af061791bbead4ffce51",
  measurementId: "G-1HB02JLTS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;