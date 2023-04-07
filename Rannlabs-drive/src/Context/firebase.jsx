// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6KKdWy5ylswo6snIP-uG9-hNQnhyS_e8",
  authDomain: "rannlabs-drive.firebaseapp.com",
  projectId: "rannlabs-drive",
  storageBucket: "rannlabs-drive.appspot.com",
  messagingSenderId: "586850176099",
  appId: "1:586850176099:web:c389abc0e86204c1b23c56",
  measurementId: "G-SXX02VE32T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) 
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export {auth,provider}