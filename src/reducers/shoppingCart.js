import { Actions } from 'actions';
import _ from 'lodash';

import { stableSort, mergeWithSum } from 'utils/arrayTools';
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

  [Actions.CHANGE_SORT]: (state, action) => {
    const payload = action.payload;
    const newList = stableSort(state.itemsList.slice(0), action.payload.sortingKey, action.payload.sortAscending);
    return { ...state, ...payload, itemsList: newList };
  },

  [Actions.REMOVE_CART_ITEM]: (state, action) => {
    const newList = state.itemsList.splice(0);
    _.remove(newList, (item) => item.id === action.payload);
    return { ...state, itemsList: newList };
  },

  [Actions.RESORT]: (state, action) => {
    const newList = stableSort(state.itemsList.slice(0), state.sortingKey, state.sortAscending);
    return { ...state, itemsList: newList };
  },

  [Actions.ADD_SHOPPING_ITEMS]: (state, action) => {
    let items = _.isArray(action.payload) ? action.payload : [action.payload];
    items = items.map(item => {
      item.qty = item.qty | 1;
      return item;
    });
    const newList = mergeWithSum(state.itemsList, items, 'id', 'qty');
    return { ...state, itemsList: newList };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function (state = { itemsList: [], sortKey: 'id', sortAscending: true }, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
