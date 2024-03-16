// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBivuHmF4KT0j2W_RkR0-cmtbK-bfH7Qdk",
  authDomain: "okawa-instruments.firebaseapp.com",
  projectId: "okawa-instruments",
  storageBucket: "okawa-instruments.appspot.com",
  messagingSenderId: "79200360210",
  appId: "1:79200360210:web:ed5b01dce4fdf6274f05cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app)
