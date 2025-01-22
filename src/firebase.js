import { AuthProvider } from "@asgardeo/auth-react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyASkISpaubHBMVHQPFKqwSP3Ec4P02lVs0",
  authDomain: "netflix-clone-1796b.firebaseapp.com",
  projectId: "netflix-clone-1796b",
  storageBucket: "netflix-clone-1796b.firebasestorage.app",
  messagingSenderId: "734146861761",
  appId: "1:734146861761:web:964dd9cee36a1dfb261240"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      AuthProvider: 'local',
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
   toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const logout = () => {
  signOut(auth);
}

export { auth, db, login, logout, signup }
