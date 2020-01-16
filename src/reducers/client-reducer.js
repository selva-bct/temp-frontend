import { CLIENT_SET, CLIENT_UNSET } from '../constant/client.constant'

const initialSate = {
  id: null,
  token: null,
}

const clientReducer = function clientReducer(state = initialSate, action) {
  switch (action.type) {
    case CLIENT_SET:
      return {
        id: 'dsd', // need to update 
        token: action,
      }

    case CLIENT_UNSET:
      return {
        id: null,
        token: null,
      }

    default:
      return state
  }
}

export default clientReducer