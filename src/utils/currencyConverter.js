export default class {
  constructor (quotes) {
    this.quotes = quotes;
  }

  _findRate (baseCurrency, quotedCurrency) {
    baseCurrency = baseCurrency.toUpperCase();
    quotedCurrency = quotedCurrency.toUpperCase();
    const directPair = baseCurrency + '/' + quotedCurrency;
    const reversePair = quotedCurrency + '/' + baseCurrency;
    let rate;
    this.quotes.some(pair => {
      if (pair.name === directPair) {
        rate = Number.parseFloat(pair.ask);
        return true;
      }
      if (pair.name === reversePair) {
        rate = 1 / Number.parseFloat(pair.bid);
      }
    });
    return rate;
  }

  getExchangeRate (baseCurrency, quotedCurrency) {
    if (baseCurrency === quotedCurrency) {
      return { rate: 1, isCrossRate: false };
    }
    let rate;
    let isCrossRate = false;
    rate = this._findRate(baseCurrency, quotedCurrency);
    if (!rate) {
      isCrossRate = true;
      rate = this._findRate('USD', quotedCurrency) / this._findRate('USD', baseCurrency);
    }
    rate = rate || 0;
    return { rate, isCrossRate };
  }
}
