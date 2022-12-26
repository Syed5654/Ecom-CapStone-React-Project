import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCJ591pcwPVBVh-6R4S5yZEI4GJSUxAZs0",
  authDomain: "crown-clothing-2b0a2.firebaseapp.com",
  projectId: "crown-clothing-2b0a2",
  storageBucket: "crown-clothing-2b0a2.appspot.com",
  messagingSenderId: "940687836938",
  appId: "1:940687836938:web:71df7c0092964032695cf3"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth)return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);


  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
    } catch (error) {
      console.log(`error creating the user`, error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}