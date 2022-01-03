import { getDocs } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { usersColRef, auth } from '../firebase/firebase-setup';

// FETCH ALL USERS REQUEST
export const fetchAllUsers = async () => {
  const snapshot = await getDocs(usersColRef);
  const users = snapshot.docs.map(doc => doc.data());
  return users;
}

// REGISTER NEW USER
export const registerUser = (email, password) => {
  console.log('email in request: ', email);
  console.log('password in request: ', password);
  const poruka = 'Slavenov flow je prošao';
  return poruka;
  // try {
  //   const cred = await createUserWithEmailAndPassword(auth, email, password);
  //   const user = cred.user;
  //   console.log('from request', user);
  //   return user;
  // } catch (e) {
  //   console.log(e);
  // }
}