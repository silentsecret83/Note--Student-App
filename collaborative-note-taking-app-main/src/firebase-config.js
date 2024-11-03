// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtHI6eSrc7CqDHMBF1mAOhI7RJZ3BpY-Y",
  authDomain: "study-notes-app.firebaseapp.com",
  projectId: "study-notes-app",
  storageBucket: "study-notes-app.firebasestorage.app",
  messagingSenderId: "402778176973",
  appId: "1:402778176973:web:57dff44817bcf1ffc79884",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Cloud Firestore

export { auth, db };
