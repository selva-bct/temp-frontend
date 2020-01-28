import {
    LOGIN_REQUESTING,
    RESET_PASSWORD_REQUESTING,
    CHANGE_PASSWORD_REQUESTING,
    FORGOT_PASSWORD_REQUESTING,
    REGISTER_REQUESTING
  } from '../constant/auth'
  
  export const loginRequest = function loginRequest(data) {
    return {
      type: LOGIN_REQUESTING,
      data
    }
  }

  export const signupRequest = function signupRequest(data) {
    return {
      type: REGISTER_REQUESTING,
      data
    }
  }

  export const changePasswordRequest = function changePasswordRequest(data) {
    return {
      type: CHANGE_PASSWORD_REQUESTING,
      data
    }
  }

  export const forgotPasswordRequest = function forgotPasswordRequest(data) {
    return {
      type: FORGOT_PASSWORD_REQUESTING,
      data
    }
  }

  export const resetPasswordRequest = function resetPasswordRequest(data) {
    return {
      type: RESET_PASSWORD_REQUESTING,
      data
    }
  }
  
  