// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2hUkU0QHcZkRbSH6nH1vsovc5nGICHkI",
  authDomain: "netflixgpt-b0193.firebaseapp.com",
  projectId: "netflixgpt-b0193",
  storageBucket: "netflixgpt-b0193.firebasestorage.app",
  messagingSenderId: "1041990444735",
  appId: "1:1041990444735:web:ea919bc9bc09e6ea00c80a",
  measurementId: "G-24LKHHSF1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()