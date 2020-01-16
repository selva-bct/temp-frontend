import clientReducer from './client-reducer';
import loginReducer from './auth-reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  client: clientReducer,
  login: loginReducer
});

export default rootReducer;
