import { combineReducers } from 'redux';
import counterReducer from 'modules/counter';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({ counter: counterReducer });
};

export default makeRootReducer;
