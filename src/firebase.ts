import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2fyV61mEs77eHNJ1ttpvftuXi4_GMfJc",
  authDomain: "my-guardian-5ba09.firebaseapp.com",
  projectId: "my-guardian-5ba09",
  storageBucket: "my-guardian-5ba09.firebasestorage.app",
  messagingSenderId: "255240508760",
  appId: "1:255240508760:web:dcb3e600d86044b7b9012d",
  measurementId: "G-QM3PT20HHK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
