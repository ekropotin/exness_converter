// @flow

export type CurrencyBoxIndex = 0 | 1;

export type CurrencyBox = {
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
    +selectedBox: CurrencyBoxIndex,
    +boxes: Array<CurrencyBox>
  },
  +currencyList: {
    +recentList: Array<String>,
    filteringString: string,
    filteredList: Array<Currency>,
    fullList: Array<Currency>
  }
};
