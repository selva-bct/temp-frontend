import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects';
import history from './../utils/history'

// axios instance import
import { axios } from '../config/api-client';
// login constant
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../constant/login.constant';

// client constant 
import {
  CLIENT_UNSET,
} from '../constant/client.constant';

// general constant 
import constant from './../constant/general';

// client action
import {
  setClient,
  unsetClient,
} from './../actions/client/client.actions';

function* logout() {

  yield put(unsetClient());
  localStorage.removeItem('token');
  history.push('/login');

}


function loginApi(credentials) {
  return axios.post(constant.login, credentials)
}
export function* loginFlow(action) {

  try {
    console.log("Into login api...")
    const { data } = action;
    const { token } = yield call(loginApi, data);
    yield put(setClient(token));
    yield put({ type: LOGIN_SUCCESS });
    localStorage.setItem('token', JSON.stringify(token));
    history.push(constant.dashboard);
  } catch (error) {
    console.log(error)
    yield put({ type: LOGIN_ERROR, error });
  } finally {
    if (yield cancelled()) {
      history.push(constant.login);
    }
  }

}

// export function* loginWatcher() {
//   while (true) {
//     console.log("--=-=- Into loginWatcher -=-=-=-= -")
//     const { email, password } = yield take(LOGIN_REQUESTING)
//     const task = yield fork(loginFlow, email, password)
//     const action = yield take([CLIENT_UNSET, LOGIN_ERROR])
//     if (action.type === CLIENT_UNSET) yield cancel(task)
//     yield call(logout)
//   }
// }