// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmmpoUhFb9_WbKMBGN84ZM5HLJk4taOzs",
  authDomain: "teamrdx-clothing.firebaseapp.com",
  projectId: "teamrdx-clothing",
  storageBucket: "teamrdx-clothing.appspot.com",
  messagingSenderId: "590369180293",
  appId: "1:590369180293:web:1449d921e41100ff2b77ec",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//initialize our DB
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user!", error.message);
    }
  }
  return userDocRef;
};
