import { combineReducers } from 'redux';

import shoppingCart from './shoppingCart';
import pending from './pending';
import notification from './notification';
import avaliableItemsList from './avaliableItemsList';

export const makeRootReducer = () => {
  return combineReducers(
    {
      shoppingCart,
      pending,
      notification,
      avaliableItemsList
    }
  );
};

export default makeRootReducer;
