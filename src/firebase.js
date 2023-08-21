//import firebase from "firebase";
/*import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //Actual database telly firebase what we are using
const auth = firebase.auth(); // AUthentication for LogIn and LogOut
const provider = new firebase.auth.GoogleAuthProvider(); //Using Google Authentication
const storage = firebase.storage();

export { auth, provider, storage };
export default db;*/

import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'; //Actual database telly firebase what we are using
import { getAuth } from 'firebase/auth';  // AUthentication for LogIn and LogOut
import { GoogleAuthProvider } from "firebase/auth";  //Using Google Authentication
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAYYTMJ5f542MM3RxNLz0hsXVY0fihyQl4",
    authDomain: "disney-plus-unofficial.firebaseapp.com",
    projectId: "disney-plus-unofficial",
    storageBucket: "disney-plus-unofficial.appspot.com",
    messagingSenderId: "306515018549",
    appId: "1:306515018549:web:d15552e0ca086ed2af427c"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { firebaseApp, auth, provider, storage };
export default db;




