import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1jy57Op8QcvIZwtzz1gZ36B6OqWNaE50",
    authDomain: "phone-auth-6221e.firebaseapp.com",
    projectId: "phone-auth-6221e",
    storageBucket: "phone-auth-6221e.appspot.com",
    messagingSenderId: "474739704198",
    appId: "1:474739704198:web:ba5b14a2ec8ed620f4ec07"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)