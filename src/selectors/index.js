// @flow
import { createSelector } from 'reselect';

import type { State, CurrencyBoxId } from 'store/stateTypes';

export const getCurrencyBoxId = (state: State): CurrencyBoxId => state.currencyBoxes.selectedBox;

// export const getCurrencyBoxes = (state: State) => state.currencyConverter.currencyBoxes;

export const getCurrencyBoxes = function (state: State) {
  return state.currencyBoxes;
};
