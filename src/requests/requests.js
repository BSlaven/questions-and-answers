import { 
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  arrayUnion
} from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  deleteUser
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

// DELETE PROFILE
export const deleteProfile = async () => {
  try {
    const user = await auth.currentUser;
    await deleteUser(user)
    console.log('zavr??io sam brisanje: ', user);
  } catch(e) {
    console.log(e)
  }
}

// DELETE USER DOCUMENT
export const deleteUserDoc = async (id) => {
  try {
    const userDoc = await doc(usersColRef, id);
    await deleteDoc(userDoc);
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

// ADD NEW ANSWER
export const addAnswer = async (answer) => {
  try {
    const docRef = await doc(questionsColRef, answer.question);
    await updateDoc(docRef, {
      answers: arrayUnion(answer)
    })
  } catch(e) {
    console.log(e)
  }
}

// ADD QUESTION LIKE
export const addQuestionLike = async (id, user) => {
  try {
    const docRef = await doc(questionsColRef, id)
    await updateDoc(docRef, {
      likes: arrayUnion(user)
    })
  } catch(e) {
    console.log(e)
  }
}

// ADD QUESTION DISLIKE
export const addQuestionDislike = async (id, user) => {
  try {
    const docRef = await doc(questionsColRef, id)
    await updateDoc(docRef, {
      dislikes: arrayUnion(user)
    })
  } catch(e) {
    console.log(e)
  }
}

// DELETE QUESTION
export const deleteQuestion = async (id) => {
  try {
    const userDoc = await doc(questionsColRef, id);
    await deleteDoc(userDoc);
  } catch(e) {
    console.log(e)
  }
}

// ADD ANSWER LIKE
export const addAnswerLike = async (user, id, question) => {
  try {
    const docRef = await doc(questionsColRef, question);
    const snapshot = await getDoc(docRef);
    const document = snapshot.data();
    const answers = [ ...document.answers ]
    const oneAnswer = answers.find(a => a.answerId === id)
    oneAnswer.likes.push(user);
    await updateDoc(docRef, {
      answers: answers
    })
    return answers
  } catch(e) {
    console.log(e)
  }
}

// ADD ANSWER DISLIKE
export const addAnswerDislike = async (user, id, question) => {
  try {
    const docRef = await doc(questionsColRef, question);
    const snapshot = await getDoc(docRef);
    const document = snapshot.data();
    const answers = [ ...document.answers ]
    const oneAnswer = answers.find(a => a.answerId === id)
    oneAnswer.dislikes.push(user);
    await updateDoc(docRef, {
      answers: answers
    })
    return answers
  } catch(e) {
    console.log(e)
  }
}

// DELETE ANSWER
export const deleteAnswer = async (id, question) => {
  try {
    const docRef = await doc(questionsColRef, question);
    const snapshot = await getDoc(docRef);
    const document = snapshot.data();
    const newAnswers = document.answers.filter(a => a.answerId !== id);
    await updateDoc(docRef, {
      answers: newAnswers
    })
  } catch(e) {
    console.log(e)
  }
}