import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducers from "./index";

const composedMiddlewares = applyMiddleware(
  axiosMiddleware(Axios),
  thunkMiddleware
);

const storeEnhancers = composeWithDevTools({
  name: 'HTMusic',
})(composedMiddlewares);

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, storeEnhancers);
  return store;
}
