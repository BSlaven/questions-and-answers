import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBoi0kL8k03gNqCQbH6E3eQXgprvE2ooj4",
  authDomain: "questions-and-answers-323de.firebaseapp.com",
  projectId: "questions-and-answers-323de",
  storageBucket: "questions-and-answers-323de.appspot.com",
  messagingSenderId: "107242964364",
  appId: "1:107242964364:web:07e507f9c4509210a582a9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

export const usersColRef = collection(db, 'users');