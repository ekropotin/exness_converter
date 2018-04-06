import { combineReducers } from 'redux';

import currencyBoxes from './currencyBoxes';
import currencyList from './currencyList';

export const makeRootReducer = () => {
  return combineReducers(
    {
      currencyBoxes,
      currencyList
    }
  );
};

export default makeRootReducer;
