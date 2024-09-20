// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEtSv0xgbsmQl6cZeqJ0qKbeS9sawDQcI",
  authDomain: "cat-assist-e210b.firebaseapp.com",
  projectId: "cat-assist-e210b",
  storageBucket: "cat-assist-e210b.appspot.com",
  messagingSenderId: "1082914937728",
  appId: "1:1082914937728:web:e7f4990fa4efde561a3f65"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

