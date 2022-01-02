import { getDocs } from 'firebase/firestore';

import { usersColRef } from '../firebase/firebase-setup';

export const fetchAllUsers = async () => {
  const users = []
  getDocs(usersColRef)
    .then(snapshot => {
    snapshot.docs.forEach(doc => {
      users.push(doc.data())
    })
  })
  return users;
}