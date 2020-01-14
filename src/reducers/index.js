import clientReducer from './client.reducer';
import loginReducer from './login.reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  client: clientReducer,
  login: loginReducer
});

export default rootReducer;
