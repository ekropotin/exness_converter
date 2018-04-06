import Converter from 'utils/currencyConverter';

const quotes = [
  { 'name':'USD/RUB', 'bid':'57.6877', 'ask':'57.6965' },
  { 'name':'USD/IDR', 'bid':'13762.4375', 'ask':'13770.5625' },
  { 'name':'USD/ZAR', 'bid':'11.95659', 'ask':'11.96176' }
];

let context = {};

describe('Test currency converter tool', () => {
  beforeEach(() => (context.converter = new Converter(quotes)));

  test('Direct rate', () => {
    const result = context.converter.getExchangeRate('USD', 'RUB');
    expect(result.isCrossRate).toBe(false);
    expect(result.rate).toBe(57.6965);
  });

  test('Reverse rate', () => {
    const result = context.converter.getExchangeRate('RUB', 'USD');
    expect(result.isCrossRate).toBe(false);
    expect(result.rate).toBe(1 / 57.6877);
  });

  test('Same currency', () => {
    const result = context.converter.getExchangeRate('USD', 'USD');
    expect(result.isCrossRate).toBe(false);
    expect(result.rate).toBe(1);
  });

  test('Cross Rate', () => {
    const result = context.converter.getExchangeRate('ZAR', 'RUB');
    expect(result.isCrossRate).toBe(true);
    expect(result.rate).toBe(57.6965 / 11.96176);
  });

  test('Unknown Currency', () => {
    const result = context.converter.getExchangeRate('PLN', 'RUB');
    expect(result.rate).toBe(0);
  });
});
