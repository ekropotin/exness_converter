import { Actions } from 'actions';

let currencyList = require('data/currencies.json');
currencyList = Object.entries(currencyList).map(currency => ({ code: currency[0], name: currency[1] }));
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

  [Actions.UPDATE_FILTER]: (state, action) => {
    const filteringString = action.payload;
    const filteringStringNormalized = filteringString.toUpperCase().trim();
    let filteredList;
    if (!filteringString) {
      filteredList = state.fullList;
    } else {
      filteredList = state.fullList.filter(currency => {
        return currency.code.toUpperCase().indexOf(filteringStringNormalized) >= 0 ||
              currency.name.toUpperCase().indexOf(filteringStringNormalized) >= 0;
      });
    }

    return { ...state, filteringString, filteredList };
  }

};

// ------------------------------------
// Reducer
// ------------------------------------
const defaultState = {
  filteringString: '',
  filteredList: currencyList,
  fullList: currencyList
};

export default function (state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
