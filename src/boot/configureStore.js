import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from 'redux-persist/es/storage'
import reducer from "./Reducer";
import { createLogger } from "redux-logger";
//import { createWhitelistFilter } from 'redux-persist-transform-filter';
//import createExpirationTransform from 'redux-persist-transform-expire';

let middlewares = [thunk];

if (__DEV__) {
  middlewares.push(createLogger({}));
}

const config = {
  key: 'root',
  storage,
  debug: true,
  blacklist: ['homeReducers', 'quizReducers', 'resultsReducers', 'networkReducers']
}

const reducers = persistCombineReducers(config, reducer);
//const compose = composeWithDevTools({ realtime: true, fport: 8000 });

export var store;

export function configureStore(onCompletion: () => void): any {
  //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = applyMiddleware(...middlewares);

  store = createStore(reducers, enhancer);
  persistStore(store, enhancer, onCompletion);

  return store;
}
