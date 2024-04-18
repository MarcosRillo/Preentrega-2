
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDehOw-yxV7KC4loLl7Rz_FBM2U5w9xT4k",
  authDomain: "la-caballeriza.firebaseapp.com",
  projectId: "la-caballeriza",
  storageBucket: "la-caballeriza.appspot.com",
  messagingSenderId: "761115719764",
  appId: "1:761115719764:web:30f53791f3e2822b7015c1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)