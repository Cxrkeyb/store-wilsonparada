import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxGFi_gcxot6DERVTXl-pj8MX9W0cYJO0",
  authDomain: "cxrkstore.firebaseapp.com",
  projectId: "cxrkstore",
  storageBucket: "cxrkstore.appspot.com",
  messagingSenderId: "581137342386",
  appId: "1:581137342386:web:2308c4e045b9072e5fceab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)