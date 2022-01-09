import { 
  getDocs,
  addDoc,
  updateDoc,
  doc
} from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword
} from 'firebase/auth'

import { questionsColRef, usersColRef, auth } from '../firebase/firebase-setup';

// FETCH ALL USERS REQUEST
export const fetchAllUsers = async () => {
  const snapshot = await getDocs(usersColRef);
  const users = snapshot.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  });
  return users;
}

// REGISTER NEW USER
export const registerUser = async (email, password) => {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const user = cred.user;
    console.log('kreirani korisnik: ', user);
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
    console.log(user);
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

// CHANGE USER NAME REQUEST
export const changeName = async (name, id) => {
  console.log('name: ', name);
  console.log('id: ', id);
  try {
    const userRef = doc(usersColRef, id);
    const updated = await updateDoc(userRef, {
      name: name
    })
    return updated
  } catch(e) {
    console.log(e)
  }
}

// CHANGE USER PASSWORD
export const changePassword = async (password) => {
  try {
    const user = await auth.currentUser;
    const newUserPass = await updatePassword(user, password);
    return newUserPass;
  } catch(e) {
    console.log(e)
  }
} 

// FETCH ALL QUESTIONS REQUEST
export const fetchAllQuestions = async () => {
  const snapshot = await getDocs(questionsColRef);
  const questions = snapshot.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  });
  return questions;
}

// ADD NEW QUESTION
export const addQuestion = async (questionData) => {
  const savedQuestion = await addDoc(questionsColRef, questionData)
  return savedQuestion
}

