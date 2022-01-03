import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import * as apiRequests from '../requests/requests';

// FETCH ALL USERS SAGA HANDLER AND WATCHER
function* fetchUserHandler() {
  try {
    const users = yield call(apiRequests.fetchAllUsers);
    yield put({type: 'FETCH_USERS_ASYNC', users});
  } catch(e) {
    console.log(e)
  }
}

export function* fetchUserWatcher() {
  yield takeLatest('FETCH_USERS', fetchUserHandler);
}

// CREATE NEW USER SAGA HANDLER AND WATCHER
export function* registerUserHandler() {
  try {
    const poruka = yield call(apiRequests.registerUser);
    console.log(poruka);
    yield put({ type: 'REG_USER'})
  } catch(e) {
    console.log(e)
  }
} 

export function* registerNewWatcher() {
  yield takeLatest('REGISTER_USER', registerUserHandler);
}

// ROOT SAGA EXPORTING MULTIPLE SAGAS
export default function* rootSaga() {
  yield all([
    fork(fetchUserHandler),
    fork(registerUserHandler)
  ]) 
}