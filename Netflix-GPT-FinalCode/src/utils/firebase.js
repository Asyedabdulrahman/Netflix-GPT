// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcuKgRWffoPwOBPE3FBN9n4nXMg4rPNLE",
  authDomain: "netflixgpt-33.firebaseapp.com",
  projectId: "netflixgpt-33",
  storageBucket: "netflixgpt-33.appspot.com",
  messagingSenderId: "625113525358",
  appId: "1:625113525358:web:e9bcd037e138b3807b8a7f",
  measurementId: "G-MK6SJQ0BLH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
