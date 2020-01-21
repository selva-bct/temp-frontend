import clientReducer from './client-reducer';
import authReducer from './auth-reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  client: clientReducer,
  auth: authReducer
});

export default rootReducer;
