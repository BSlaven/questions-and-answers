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
      id: rawUser.uid, 
      email: rawUser.email,
      questions: [],
      answers: []
    }
    const savedUser = yield call(apiRequests.saveUser, user)
    yield put({ type: 'REG_USER', user, savedUser })
  } catch(e) {
    console.log(e)
  }
}

// LOGIN USER HANDLER
export function* loginUserHandler({ email, password }) {
  try {
    yield call(apiRequests.loginUser, email, password);
    // yield put({ type: 'SIGN_IN_USER', user });
  } catch(e) {
    console.log(e)
  }
}

// LOGOUT USER SAGA HANDLER
export function* logoutUserHandler() {
  try {
    yield call(apiRequests.logoutUser);
    // yield put({ type: 'SIGN_OUT_USER' })
  } catch(e) {
    console.log(e)
  }
}

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
    yield call(apiRequests.addQuestion, payload);
    yield put({ type: 'NEW_QUESTION', payload });
  } catch(e) {
    console.log(e)
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
    takeLatest('USER_OUT', userOutHandler)
  ])
}