import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as apiRequests from '../requests/requests';

// FETCH ALL USERS SAGA HANDLER AND WATCHER
export function* fetchUserHandler() {
  try {
    const users = yield call(apiRequests.fetchAllUsers);
    yield put({type: 'FETCH_USERS_ASYNC', users});
  } catch(e) {
    console.log(e)
  }
}

// CREATE NEW USER SAGA HANDLER AND WATCHER
export function* registerUserHandler({email, password, name}) {
  try {
    // const user = yield apiRequests.registerUser(email, password);
    const rawUser = yield call(apiRequests.registerUser, email, password);
    const user = { 
      name: name,
      userId: rawUser.uid,
      email: rawUser.email,
      questions: [],
      answers: []
    }
    console.log(user);
    // const savedUser = yield call(apiRequests.saveUser, user)
    yield call(apiRequests.saveUser, user)
    yield put({ type: 'REG_USER', user })
    // yield put({ type: 'REG_USER', newUser: {...user, id: rawUser.uid } })
    console.log('završio registraciju')
  } catch(e) {
    console.log(e)
  }
}

// LOGIN USER HANDLER
export function* loginUserHandler({ email, password }) {
  try {
    yield call(apiRequests.loginUser, email, password);
  } catch(e) {
    console.log(e)
  }
}

// LOGOUT USER SAGA HANDLER
export function* logoutUserHandler() {
  try {
    yield call(apiRequests.logoutUser);
  } catch(e) {
    console.log(e)
  }
}

// CHANGE USER NAME HANDLER
export function* changeUserNameHanlder({ name, id }) {
  try {
    yield call(apiRequests.changeName, name, id);
    yield put({ type: 'CHANGE_NAME', name, id });
  } catch(e) {
    console.log(e)
  }
}

// CHANGE USER PASSWORD HANDLER
export function* changeUserPasswordHandler({ password }) {
  try {
    yield call(apiRequests.changePassword, password)
    console.log('password change done');
  } catch(e) {
    console.log(e)
  }
}

// DELETE PROFILE HANDLER
export function* deleteProfileHandler({ id }) {
  try {
    yield call(apiRequests.deleteProfile);
    yield call(apiRequests.deleteUserDoc, id)
    yield put({ type: 'REMOVE_USER', id })
  } catch(e) {
    console.log(e)
  }
}

// FETCH QUESTION HANDLER
export function* fetchQuestionsHandler() {
  try {
    const questions = yield call(apiRequests.fetchAllQuestions);
    yield put({ type: 'FETCH_QUESTIONS_ASYNC', questions });
  } catch(e) {
    console.log(e)
  }
}

// ADD QUESTION HANDLER
export function* addQuestionHandler({ payload }) {
  try {
    const savedQuestion = yield call(apiRequests.addQuestion, payload);
    const newQuestion = { ...payload, id: savedQuestion.id}
    console.log('pitanje u sagi: ', newQuestion);
    yield put({ type: 'NEW_QUESTION', newQuestion });
  } catch(e) {
    console.log(e)
  }
}

// SELECT QUESTION HANDLER
export function* selectQuestionHandler({ payload }) {
  try {
    yield put({ type: 'SELECTED_QUESTION', payload });
  } catch(e) {
    console.log(e);
  }
}

export function* userInHandler ({ id }) {
  try {
    yield put({ type: 'USER_IN_ASYNC', id })
  } catch(e) {
    console.log(e);
  }
}

export function* userOutHandler () {
  try {
    yield put({ type: 'USER_OUT_ASYNC' })
  } catch(e) {
    console.log(e);
  }
}

// ADD ANSWER HANDLER
export function* addAnswerHandler({ payload }) {
  try {
    console.log(payload);
    yield call(apiRequests.addAnswer, payload);
    yield put({ type: 'NEW_ANSWER', payload })
  } catch(e) {
    console.log(e)
  }
}

// ROOT SAGA EXPORTING ALL OTHER SAGAS
export default function* rootSaga() {
  yield all([
    takeLatest('FETCH_USERS', fetchUserHandler),
    takeLatest('REGISTER_USER', registerUserHandler),
    takeLatest('LOGOUT_USER', logoutUserHandler),
    takeLatest('LOGIN_USER', loginUserHandler),
    takeLatest('FETCH_ALL_QUESTIONS', fetchQuestionsHandler),
    takeLatest('ADD_QUESTION', addQuestionHandler),
    takeLatest('USER_IN', userInHandler),
    takeLatest('USER_OUT', userOutHandler),
    takeLatest('CHANGE_USER_NAME', changeUserNameHanlder),
    takeLatest('CHANGE_USER_PASSWORD', changeUserPasswordHandler),
    takeLatest('DELETE_PROFILE', deleteProfileHandler),
    takeLatest('SELECT_QUESTION', selectQuestionHandler),
    takeLatest('ADD_ANSWER', addAnswerHandler)
  ])
}