import { combineReducers } from 'redux';
import tableSortReducer from 'modules/tableSorting';
import sortItemsReducer from 'modules/shoppingCartData';

export const makeRootReducer = () => {
  return combineReducers(
    {
      shoppingCartSorting: tableSortReducer,
      shoppingCartHeaderColumns: (state = null, action) => state,
      shoppingCartList: sortItemsReducer
    }
  );
};

export default makeRootReducer;
