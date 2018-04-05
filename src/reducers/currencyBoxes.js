import _ from 'lodash';

import { Actions } from 'actions';
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
  }

};

// ------------------------------------
// Reducer
// ------------------------------------
const defaultState = {
  isCrossRate: false,
  selectedBox: 'first',
  firstBox: {
    id: 'first',
    currencyCode: 'USD',
    amount: 0.0
  },
  secondBox: {
    id: 'second',
    currencyCode: 'RUB',
    amount: 0.0
  }
};

export default function (state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
