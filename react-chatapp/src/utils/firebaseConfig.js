import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiDxq1rpSaSiTUs8wPC8qUFYrQUapyhkg",
  authDomain: "chat-app-db974.firebaseapp.com",
  projectId: "chat-app-db974",
  storageBucket: "chat-app-db974.appspot.com",  // Fixed the typo in your storage URL
  messagingSenderId: "214239378681",
  appId: "1:214239378681:web:2aa608db862fb80805f628",
  measurementId: "G-DJ24JF5PMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage, firebaseConfig };
