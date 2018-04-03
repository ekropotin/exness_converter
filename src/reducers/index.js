import { combineReducers } from 'redux';

import currencyBoxes from './currencyBoxes';

export const makeRootReducer = () => {
  return combineReducers(
    {
      currencyBoxes
    }
  );
};

export default makeRootReducer;
