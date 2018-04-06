import { Actions } from 'actions';
import Converter from 'utils/currencyConverter';

const quotes = require('data/quotes.json').base;

const deepCloneArray = array => array.map(item => ({ ...item }));

const coverter = new Converter(quotes);
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

  [Actions.CHANGE_BOX]: (state, action) => {
    const boxId = action.payload;
    if (boxId === state.selectedBox) {
      return state;
    }
    return { ...state, selectedBox: boxId };
  },

  [Actions.UPDATE_BOX_VALUE]: (state, action) => {
    const value = action.payload;
    const boxes = deepCloneArray(state.boxes);
    boxes[state.selectedBox].amount = value;
    return { ...state, boxes };
  },

  [Actions.CALCULATE_PAIR]: (state, action) => {
    const quotedCurrencyBoxIndex = state.selectedBox === 0 ? 1 : 0;
    const baseCurrencyBox = state.boxes[state.selectedBox];
    const quotedCurrencyBox = state.boxes[quotedCurrencyBoxIndex];
    const { rate, isCrossRate } = coverter.getExchangeRate(baseCurrencyBox.currencyCode,
      quotedCurrencyBox.currencyCode);
    const boxes = deepCloneArray(state.boxes);
    boxes[quotedCurrencyBoxIndex].amount = (rate * baseCurrencyBox.amount).toFixed(2);
    return { ...state, boxes, isCrossRate };
  },

  [Actions.CHANGE_CURRENCY]: (state, action) => {
    const currency = action.payload;
    const boxes = deepCloneArray(state.boxes);
    boxes[state.selectedBox].currencyCode = currency;
    return { ...state, boxes };
  }

};

// ------------------------------------
// Reducer
// ------------------------------------
const defaultState = {
  isCrossRate: false,
  selectedBox: 0,
  boxes: [
    {
      currencyCode: 'USD',
      amount: 0.0
    },
    {
      currencyCode: 'RUB',
      amount: 0.0
    }
  ]
};

export default function (state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
