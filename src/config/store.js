import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { logger } from 'redux-logger';

import rootReducer from '../reducers';
import rootSaga from './../sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middleware = [sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger]
}

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(
      ...middleware
    )
  )
);

sagaMiddleware.run(rootSaga);


export default store