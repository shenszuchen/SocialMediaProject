// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx7KRSpr3nqJSqL-lLjPfzqaFggYiPUjo",
  authDomain: "socialmediaproject-ea5fe.firebaseapp.com",
  projectId: "socialmediaproject-ea5fe",
  storageBucket: "socialmediaproject-ea5fe.appspot.com",
  messagingSenderId: "91386997930",
  appId: "1:91386997930:web:50f8d05d6cd7430c8934d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);