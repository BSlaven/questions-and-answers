import { takeLatest, put, call } from 'redux-saga/effects';
import * as apiRequests from '../requests/requests';

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