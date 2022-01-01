import { takeLatest, put, call } from 'redux-saga/effects';
import * as apiRequests from '../requests/requests';

function* fetchUserHandler() {
  try {
    const user = yield call(apiRequests.fetchUser);
    yield put({type: 'FETCH_USER_ASYNC', user});
  } catch(e) {
    console.log(e)
  }
}

export function* fetchUserWatcher() {
  yield takeLatest('FETCH_USER', fetchUserHandler);
}