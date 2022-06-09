// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABtvJJ71NiB2bXCvwQXaUa2f-FsSyO81s",
  authDomain: "rick-and-morty-352720.firebaseapp.com",
  projectId: "rick-and-morty-352720",
  storageBucket: "rick-and-morty-352720.appspot.com",
  messagingSenderId: "854555619086",
  appId: "1:854555619086:web:331ea5bf6b5e1c3dafb15f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new FacebookAuthProvider();
