import { takeLatest, takeEvery } from "redux-saga/effects";
import { loginWatcher, loginFlow } from './login.saga';

export default function* rootSaga() {
  yield takeLatest('LOGIN_REQUESTING', loginFlow)
  // yield [
  //   loginWatcher
  // ]
}