// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0KxhBSvGTMMTufHidq5-l8lIpsyFeBQg",
  authDomain: "wild-life-b3cdd.firebaseapp.com",
  projectId: "wild-life-b3cdd",
  storageBucket: "wild-life-b3cdd.appspot.com",
  messagingSenderId: "479514199498",
  appId: "1:479514199498:web:a68a1e9d8595df8b64bb33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;