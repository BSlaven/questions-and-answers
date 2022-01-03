import { getDocs } from 'firebase/firestore';

import { usersColRef } from '../firebase/firebase-setup';

export const fetchAllUsers = async () => {
  const snapshot = await getDocs(usersColRef);
  const users = snapshot.docs.map(doc => doc.data());
  return users;
}