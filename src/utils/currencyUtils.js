const quotes = require('data/quotes.json').base;

export function getExchangeRate (baseCurrency, quotedCurrency, precision = 2) {
  baseCurrency = baseCurrency.toUpperCase();
  quotedCurrency = quotedCurrency.toUpperCase();
  const directPair = baseCurrency + '/' + quotedCurrency;
  const reversePair = quotedCurrency + '/' + baseCurrency;
  let rate;
  let isCrossRate = false;
  quotes.some(pair => {
    if (pair.name === directPair) {
      rate = Number.parseFloat(pair.ask);
      return true;
    }
    if (pair.name === reversePair) {
      rate = 1 / Number.parseFloat(pair.ask);
    }
  });
  if (!rate) {
    // TODO: calc cross rate
  }
  return { rate, isCrossRate };
}
