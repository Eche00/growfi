import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXADr7GTmklxDZBlaBuBWc9Id9A9XEk2w",
  authDomain: "expensetracker-3e3e2.firebaseapp.com",
  projectId: "expensetracker-3e3e2",
  storageBucket: "expensetracker-3e3e2.firebasestorage.app",
  messagingSenderId: "672948202250",
  appId: "1:672948202250:web:e0996467f027d952f2e8f3",
  measurementId: "G-Q21B6PLTSH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storageF = getStorage(app);