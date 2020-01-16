import { takeLatest } from 'redux-saga/effects';

import {
  LOGIN_REQUESTING,
  REGISTER_REQUESTING,
  FORGOT_PASSWORD_REQUESTING,
  CHANGE_PASSWORD_REQUESTING
} from './../constant/auth.constant';
import {
  login,
  register,
  forgotPassword,
  changePassword
} from './auth.saga';

export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUESTING, login);
  yield takeLatest(REGISTER_REQUESTING, register);
  yield takeLatest(CHANGE_PASSWORD_REQUESTING, changePassword);
  yield takeLatest(FORGOT_PASSWORD_REQUESTING, forgotPassword);
};