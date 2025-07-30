// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRAFuUtib9FaMyGVRFIvOaXRKx2B-gRf0",
  authDomain: "netflixgpt-f9765.firebaseapp.com",
  projectId: "netflixgpt-f9765",
  storageBucket: "netflixgpt-f9765.firebasestorage.app",
  messagingSenderId: "209165509736",
  appId: "1:209165509736:web:68fe36e349371b5ce1c7dd",
  measurementId: "G-BSTMGSEQ3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();