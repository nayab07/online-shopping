// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6TsWLE5gBJK66iUI1WUW1lLNYn0Frl2A",
  authDomain: "studentlist-ecf3f.firebaseapp.com",
  projectId: "studentlist-ecf3f",
  storageBucket: "studentlist-ecf3f.firebasestorage.app",
  messagingSenderId: "854825722396",
  appId: "1:854825722396:web:4158e5c394c2a537f4f5d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);