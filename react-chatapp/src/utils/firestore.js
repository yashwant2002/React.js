// src/firestore.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import {firebaseConfig} from "./firebaseConfig"; // ✅ Corrected import

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Function to send a message
export const sendMessage = async (userId, message) => {
  try {
    await addDoc(collection(db, "messages"), {
      userId,
      message,
      timestamp: serverTimestamp(), // ✅ Fixed timestamp
    });
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

// ✅ Function to get messages in real-time
export const getMessages = (callback) => {
  try {
    const q = query(collection(db, "messages"), orderBy("timestamp")); // ✅ Fixed orderBy
    return onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(messages);
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};
