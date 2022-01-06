import { 
  getDocs,
  addDoc
} from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { questionsColRef, usersColRef, auth } from '../firebase/firebase-setup';

// FETCH ALL USERS REQUEST
export const fetchAllUsers = async () => {
  const snapshot = await getDocs(usersColRef);
  const users = snapshot.docs.map(doc => doc.data());
  return users;
}

// REGISTER NEW USER
export const registerUser = async (email, password) => {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const user = cred.user;
    return user;
  } catch (e) {
    console.log(e);
  }
}

// LOGIN USER
export const loginUser = async (email, password) => {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const user = cred.user;
    return user;
  } catch(e) {
    console.log(e)
  }
}

// SAVE USER TO DB
export const saveUser = async (user) => {
  try {
    const savedUser = await addDoc(usersColRef, user);
    return savedUser
  } catch(e) {
    console.group(e)
  }
}

// LOGOUT USER
export const logoutUser = async () => {
  try {
    await signOut(auth)
  } catch(e) {
    console.log(e.message)
  }
}

// FETCH ALL QUESTIONS REQUEST
export const fetchAllQuestions = async () => {
  const snapshot = await getDocs(questionsColRef);
  const questions = snapshot.docs.map(doc => doc.data());
  return questions;
}

// ADD NEW QUESTION
export const addQuestion = async (questionData) => {
  const savedQuestion = await addDoc(questionsColRef, questionData)
  return savedQuestion
}

