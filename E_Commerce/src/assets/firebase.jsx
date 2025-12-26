// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyADz-_Z82TKVG-PI62bwhbXXGsiSX0OWVQ",
  authDomain: "e-comm-4a1b1.firebaseapp.com",
  projectId: "e-comm-4a1b1",
  storageBucket: "e-comm-4a1b1.firebasestorage.app",
  messagingSenderId: "895709238818",
  appId: "1:895709238818:web:a4c457e8122bf93eae9c7b",
  measurementId: "G-F1HJMJRMPM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
