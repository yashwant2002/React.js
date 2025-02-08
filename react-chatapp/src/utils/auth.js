import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Sign up new user
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;

    // Store user data in Firestore
    await setDoc(doc(firestore, 'users', user.uid), {
      email: user.email,
      uid: user.uid,
      createdAt: serverTimestamp(),
    });

    return user;
  } catch (error) {
    console.error('Error signing up:', error.message);
    throw new Error(error.message); // Propagate error message
  }
};

// Sign in user
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in:', error.message);
    throw new Error(error.message); // Propagate error message
  }
};

// Sign out user
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error.message);
    throw new Error(error.message);
  }
};

// Auth state listener (cleanup on component unmount)
export const authStateListener = (callback) => {
  const unsubscribe = onAuthStateChanged(auth, callback);
  return unsubscribe; // Return unsubscribe function for cleanup
};
