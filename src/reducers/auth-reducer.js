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
  CHANGE_PASSWORD_REQUESTING
} from '../constant/auth.constant'

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}

const reducer = function (state = initialState, action) {
  switch (action.type) {
    // Set the requesting flag and append a message to be shown
      
      case LOGIN_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Logging in...', time: new Date() }],
        errors: [],
      }

    // Successful?  Reset the login state.
    case LOGIN_SUCCESS:
      return {
        errors: [],
        messages: [],
        requesting: false,
        successful: true,
      }

    // Append the error returned from our api
    // set the success and requesting flags to false
    case LOGIN_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      }

    // REGISTER REDUCER CASE
    case REGISTER_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Registering ...', time: new Date() }],
        errors: [],
      }

    case REGISTER_SUCCESS:
      return {
        errors: [],
        messages: [],
        requesting: false,
        successful: true,
      }
    case REGISTER_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      };

    // FORGOT PASSWORD REDUCER CASE
    case FORGOT_PASSWORD_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Registering...', time: new Date() }],
        errors: [],
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        errors: [],
        messages: [],
        requesting: false,
        successful: true,
      };

    case FORGOT_PASSWORD_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      };

    // CHANGE PASSWORD REDUCER CASE
    case CHANGE_PASSWORD_REQUESTING:
      return {
          requesting: true,
          successful: false,
          messages: [{ body: 'Registering...', time: new Date() }],
          errors: [],
        };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        errors: [],
        messages: [],
        requesting: false,
        successful: true,
      };
    case CHANGE_PASSWORD_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      };

    default:
      return state
  }
}

export default reducer