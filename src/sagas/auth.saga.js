import { call, put, cancelled } from 'redux-saga/effects';
import history from '../utils/history'

import { axios } from '../config/api-client';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  INVITE_USER_SUCCESS,
  INVITE_USER_ERROR
} from '../constant/auth';
import constant from '../constant/general';

/**
 * Generic method to serve the network request
 * @param Object - reqData 
 */
function httpCall(reqData) {
  const { url, method, data } = reqData;
  return axios[method](url, data);
}

/**
 * Generator method to make authentication request to user
 * @param redux action object -  action 
 */
export function* login(action) {

  try {
    console.log("Into login api...")
    const { data } = action;
    const reqData = { url: constant.login, data, method: 'post' };
    yield call(httpCall, reqData);
    yield put({ type: LOGIN_SUCCESS });
  } catch (error) {
    console.log('Error while loggin in :: ', error);
    yield put({ type: LOGIN_ERROR, error });
  } finally {
    if (yield cancelled()) {
      history.push(constant.login);
    }
  }

}

export function* register(action) {

  try {
    console.log("Into register api...", action);
    const { data } = action;
    const reqData = { url: constant.register, data, method: 'post' };
    yield call(httpCall, reqData);
    yield put({ type: REGISTER_SUCCESS });
  } catch (error) {
    console.log('Error while regsistering user :: ', error);
    yield put({ type: REGISTER_ERROR, error });
  }

}

export function* changePassword(action) {

  try {
    console.log("Into change password api...", action);
    const { data } = action;
    const reqData = { url: constant.changePassword, data, method: 'post' };
    yield call(httpCall, reqData);
    yield put({ type: CHANGE_PASSWORD_SUCCESS });
  } catch (error) {
    console.log('Error while change password :: ', error);
    yield put({ type: CHANGE_PASSWORD_ERROR, error });
  }

}

export function* forgotPassword(action) {

  try {
    console.log("Into forgot password api...", action);
    const { data } = action;
    const reqData = { url: constant.forgotPassword, data, method: 'post' };
    yield call(httpCall, reqData);
    yield put({ type: FORGOT_PASSWORD_SUCCESS });
  } catch (error) {
    console.log('Error while forgot password :: ', error);
    yield put({ type: FORGOT_PASSWORD_ERROR, error });
  }

}

export function* resetPassword(action) {

  try {
    console.log("Into reset password api...", action);
    const { data } = action;
    const reqData = { url: constant.resetPassword, data, method: 'post' };
    yield call(httpCall, reqData);
    yield put({ type: RESET_PASSWORD_SUCCESS });
  } catch (error) {
    console.log('Error while r peseting assword :: ', error);
    yield put({ type: RESET_PASSWORD_ERROR, error });
  }

}

export function* inviteUser(action) {
  try {
    console.log("Into invite api...", action);
    const { data } = action;
    const reqData = { url: constant.inviteUser, data, method: 'post' };
    yield call(httpCall, reqData);
    yield put({ type: INVITE_USER_SUCCESS });
  } catch (error) {
    console.log('Error while inviting user :: ', error);
    yield put({ type: INVITE_USER_ERROR, error });
  }
}