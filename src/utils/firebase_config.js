// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9ZbGnCv2StPv2ZYQ3hOQXvZQ2MXSJPhs",
  authDomain: "netflixgpt-d96be.firebaseapp.com",
  projectId: "netflixgpt-d96be",
  storageBucket: "netflixgpt-d96be.appspot.com",
  messagingSenderId: "1016896263426",
  appId: "1:1016896263426:web:dac4c389e33325ad0e5e1b",
  measurementId: "G-2DJSJ3435G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();