// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmu2on62NV5URwW34MT7SmL0tqAqhoSVg",
  authDomain: "money-manager-2e5f2.firebaseapp.com",
  projectId: "money-manager-2e5f2",
  storageBucket: "money-manager-2e5f2.appspot.com",
  messagingSenderId: "193068980096",
  appId: "1:193068980096:web:24cec7c363e79d08889365",
  measurementId: "G-PQVZX3G8DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);