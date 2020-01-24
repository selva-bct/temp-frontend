import {
  LOGIN_REQUESTING,
} from './../../constant/auth.constant'

export const loginRequest = function loginRequest({ email, password }) {
  return {
    type: LOGIN_REQUESTING,
    email,
    password,
  }
}

