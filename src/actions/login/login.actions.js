import { call, put, takeLatest } from 'redux-saga/effects';
import * as loginActionTypes from '../../constant/login.constant'
import {
  LOGIN_REQUESTING,
} from './login-constant'

export const loginRequest = function loginRequest({ email, password }) {
  return {
    type: LOGIN_REQUESTING,
    email,
    password,
  }
}
