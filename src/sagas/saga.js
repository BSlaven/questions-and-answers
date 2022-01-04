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
export function* registerUserHandler({email, password}) {
  try {
    // const user = yield apiRequests.registerUser(email, password);
    const user = yield call(apiRequests.registerUser, email, password);
    yield put({ type: 'REG_USER', user })
  } catch(e) {
    console.log(e)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('FETCH_USERS', fetchUserHandler),
    takeLatest('REGISTER_USER', registerUserHandler)
  ])
}