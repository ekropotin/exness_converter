// @flow
import { createSelector } from 'reselect';

import type { State } from 'store/stateTypes';

export const getCurrencyBoxesState = (state: State) => state.currencyBoxes;

export const getCurrencyListState = (state: State) => state.currencyList;

const getSelectedBoxIndex = (state: State) => state.currencyBoxes.selectedBox;

const getCurrencyBoxes = (state: State) => state.currencyBoxes.boxes;

const getSelectedBox = createSelector(
  getSelectedBoxIndex,
  getCurrencyBoxes,
  (index, boxes) => (boxes[index])
);

export const getSelectedCurrency = createSelector(
  getSelectedBox,
  box => box.currencyCode
);
