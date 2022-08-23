import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz3Y8Odi4yI5njpv_FkkirsP5vILICTi0",
  authDomain: "winvit-5675a.firebaseapp.com",
  projectId: "winvit-5675a",
  storageBucket: "winvit-5675a.appspot.com",
  messagingSenderId: "867498018950",
  appId: "1:867498018950:web:ccef109cfe56dd1d356907"
};

const firebaseService = initializeApp(firebaseConfig);
const db = getFirestore(firebaseService);

export default db;