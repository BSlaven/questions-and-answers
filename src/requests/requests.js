import { 
  getDocs,
  addDoc
} from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { usersColRef, auth } from '../firebase/firebase-setup';

// FETCH ALL USERS REQUEST
export const fetchAllUsers = async () => {
  console.log('I am in requests.fetchAllUsers')
  const snapshot = await getDocs(usersColRef);
  const users = snapshot.docs.map(doc => doc.data());
  console.log('These are the users from request: ', users)
  return users;
}

// REGISTER NEW USER
export const registerUser = async (email, password) => {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const user = cred.user;
    console.log('user signed up')
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
    console.log('User successfully saved: ', savedUser);
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