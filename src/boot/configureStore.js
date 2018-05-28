import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from 'redux-persist/es/storage'
import reducer from "./Reducer";
import { createLogger } from "redux-logger";

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

export var store;

export function configureStore(onCompletion: () => void): any {
  const enhancer = applyMiddleware(...middlewares);

  store = createStore(reducers, enhancer);
  persistStore(store, enhancer, onCompletion);

  return store;
}
