// @flow

export type SelectedBoxId = 'first' | 'second';

export type CurrencyBox = {
    id: SelectedBoxId,
    currency: string,
    amount: number
};

export type Currency = {
    +symbol: string,
    +name: string,
    +symbol_native: string,
    +decimal_digits: number,
    +rounding: number,
    +code: string,
    +name_plural: string
};

export type State = {
  +currencyConverter: {
    +currencyBoxes: {
      +selectedBox: SelectedBoxId,
      +firstBox: CurrencyBox,
      +secondBox: CurrencyBox
    },
    +currencyList: {
      +recentList: Array<String>,
      filteringString: string,
      filteredList: Array<Currency>,
      fullList: Array<Currency>
    }
  }
};
