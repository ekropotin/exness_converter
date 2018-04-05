// @flow

export type CurrencyBoxId = 'first' | 'second';

export type CurrencyBox = {
    id: CurrencyBoxId,
    currencyCode: string,
    amount: number
};

export type Currency = {
    +name: string,
    +code: string
};

export type State = {
  +currencyBoxes: {
    +isCrossRate: boolean,
    +selectedBox: CurrencyBoxId,
    +firstBox: CurrencyBox,
    +secondBox: CurrencyBox
  },
  +currencyList: {
    +recentList: Array<String>,
    filteringString: string,
    filteredList: Array<Currency>,
    fullList: Array<Currency>
  }
};
