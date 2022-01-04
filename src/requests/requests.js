import { getDocs } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth'

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
    // const cred = await createUserWithEmailAndPassword(auth, email, password);
    // const user = cred.user;
    return { email, password }
    // return user;
  } catch (e) {
    console.log(e);
  }
}