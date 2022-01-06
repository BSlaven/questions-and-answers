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
  console.log('done with fetchUserHandler')
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
    const user = yield call(apiRequests.loginUser, email, password);
    yield put({ type: 'SIGN_IN_USER', user });
  } catch(e) {
    console.log(e)
  }
}

// LOGOUT USER SAGA HANDLER
export function* logoutUserHandler() {
  try {
    yield call(apiRequests.logoutUser);
    yield put({ type: 'SIGN_OUT_USER' })
  } catch(e) {
    console.log(e)
  }
}

// ADD QUESTION HANDLER
export function* addQuestionHandler({ q }) {
  try {
    const question = yield call(apiRequests.addQuestion, q)
    console.log('question in saga handler', question);
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
    takeLatest('ADD_QUESTION', addQuestionHandler)
  ])
}