// @flow

import React from 'react';
import { FormGroup, FormControl, ControlLabel, Table } from 'react-bootstrap';

import type { Currency } from 'store/stateTypes';

import './CurrencyList.scss';

type Props = {
  updateCurrencyFilter: (string) => any,
  changeCurrency: (string) => any,

  selectedCurrency: string,
  filteringString: string,
  filteredList: Array<Currency>
};

function CurrencyRow (p) {
  let classNames = 'c-currency-list__item';
  if (p.selected) {
    classNames += ' c-currency-list__item--active';
  }
  return (<tr className={classNames} id={p.code} onClick={p.onClick}>
    <td>{p.code}</td><td>{p.name}</td>
  </tr>);
}

function SearchBox (p) {
  return (
    <form>
      <FormGroup>
        <ControlLabel>Find currencies</ControlLabel>
        <FormControl type='text' value={p.value} onChange={p.onChange}
        />
      </FormGroup>
    </form>
  );
}

function PopularCurrencies (p) {
  return (
    <div>
      <span>Popular: </span>
      <ul className='c-currency-popular-list'>
        {p.items.map(item => {
          let classes = 'c-currency-popular-list__item';
          if (p.selected === item) {
            classes += ' c-currency-popular-list__item--active';
          }
          return (<li key={item} id={item} className={classes} onClick={p.onClick}>{item}</li>);
        })}
      </ul>
    </div>
  );
}

export default class extends React.Component<Props> {
  onCurrencyClick = (e: SyntheticEvent<HTMLElement>) => {
    this.props.changeCurrency(e.currentTarget.id);
  };

  onFilterValueChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.props.updateCurrencyFilter(e.currentTarget.value);
  };

  render () {
    return (
      <div>
        <SearchBox value={this.props.filteringString} onChange={this.onFilterValueChange} />
        <PopularCurrencies
          items={['USD', 'EUR', 'CHF', 'JPY', 'AUD', 'CAD']}
          selected={this.props.selectedCurrency}
          onClick={this.onCurrencyClick}
        />

        <Table className='c-currency-list'>
          <tbody>
            {this.props.filteredList.map(currency =>
              <CurrencyRow
                key={currency.code}
                code={currency.code}
                name={currency.name}
                selected={this.props.selectedCurrency === currency.code}
                onClick={this.onCurrencyClick}
              />)
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
