import { get } from 'lodash';

import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  REGISTER_REQUESTING,
  FORGOT_PASSWORD_REQUESTING,
  CHANGE_PASSWORD_REQUESTING,
  RESET_PASSWORD_REQUESTING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  AUTH_INITIALIZE
} from '../constant/auth'

const data = {
  requesting: false,
  successful: null,
  messages: []
}

const defaultErrorMessage = 'Oops something went wrong';
const initialState = {
  login: data,
  register: data,
  forgotPassword: data,
  changePassword: data,
  resetPassword: data,

}

const reducer = function (state = initialState, action) {
  switch (action.type) {
    // Set the requesting flag and append a message to be shown

    case AUTH_INITIALIZE:
      return initialState.data = data;

    case LOGIN_REQUESTING:
      return {
        ...state,
        login: {
          requesting: true,
          successful: false,
          messages: [{ body: 'Logging in...', time: new Date() }],
          errors: [],
        }
      };

    // Successful?  Reset the login state.
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          errors: [],
          messages: [],
          requesting: false,
          successful: true,
        }
      };

    // Append the error returned from our api
    // set the success and requesting flags to false
    case LOGIN_ERROR:
      return {
        ...state,
        login: {
          errors: state.login.errors.concat([{
            body: get(action, 'error.response.data.message', defaultErrorMessage),
            time: new Date(),
            status: get(action, 'error.response.status', 500)
          }]),
          requesting: false,
          successful: false,
        }
      };

    // REGISTER REDUCER CASE
    case REGISTER_REQUESTING:
      return {
        ...state,
        register: {
          requesting: true,
          successful: false,
          messages: [{ body: 'Registering ...', time: new Date() }],
          errors: [],
        }
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          errors: [],
          messages: [],
          requesting: false,
          successful: true,
        }
      };

    case REGISTER_ERROR:
      return {
        ...state,
        register: {
          errors: state.register.errors.concat([{
            body: action.error.toString(),
            time: new Date(),
          }]),
          messages: [],
          status: action.error.response ? action.error.response.status : 500,
          requesting: false,
          successful: false,
        }
      };

    // FORGOT PASSWORD REDUCER CASE
    case RESET_PASSWORD_REQUESTING:
      return {
        ...state,
        resetPassword: {
          requesting: true,
          successful: false,
          messages: [{ body: 'Requesting for forgot password...', time: new Date() }],
          errors: [],
        }
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: {
          errors: [],
          messages: [{ body: 'Successfully requested forgot password', time: new Date() }],
          requesting: false,
          successful: true,
        }
      };

    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPassword: {
          errors: state.resetPassword.errors.concat([{
            body: action.error.toString(),
            time: new Date(),
          }]),
          messages: [{ body: 'Error requesting forgot password', time: new Date() }],
          requesting: false,
          successful: false,
        }
      };

    // FORGOT PASSWORD REDUCER CASE
    case FORGOT_PASSWORD_REQUESTING:
      return {
        ...state,
        forgotPassword: {
          requesting: true,
          successful: false,
          messages: [{ body: 'Requesting for forgot password...', time: new Date() }],
          errors: [],
        }
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: {
          errors: [],
          messages: [{ body: 'Successfully requested forgot password', time: new Date() }],
          requesting: false,
          successful: true,
        }
      };

    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgotPassword: {
          errors: state.forgotPassword.errors.concat([{
            body: action.error.toString(),
            time: new Date(),
          }]),
          messages: [{ body: 'Error requesting forgot password', time: new Date() }],
          requesting: false,
          successful: false,
        }
      };

    // CHANGE PASSWORD REDUCER CASE
    case CHANGE_PASSWORD_REQUESTING:
      return {
        ...state,
        changePassword: {
          requesting: true,
          successful: false,
          messages: [{ body: 'Registering...', time: new Date() }],
          errors: [],
        }
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassword: {
          errors: [],
          messages: [],
          requesting: false,
          successful: true,
        }
      };
    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        changePassword: {
          errors: state.changePassword.errors.concat([{
            body: action.error.toString(),
            time: new Date()
          }]),
          messages: [],
          requesting: false,
          successful: false,
        }
      };

    default:
      return state
  }
}

export default reducer