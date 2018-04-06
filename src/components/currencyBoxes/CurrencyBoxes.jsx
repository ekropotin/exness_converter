// @flow

import React from 'react';
import { FormGroup, InputGroup, FormControl, Label } from 'react-bootstrap';

import type { CurrencyBoxIndex, CurrencyBox as CurrencyBoxType } from 'store/stateTypes';

import './CurrencyBoxes.scss';

type Props = {
  updateBoxValue: (number) => any,
  changeSelectedBox: (number) => any,

  isCrossRate: boolean,
  selectedBox: CurrencyBoxIndex,
  boxes: Array<CurrencyBoxType>
};

function CurrencyBox (p) {
  return (
    <FormGroup id={p.id} onClick={p.onClick}>
      <InputGroup>
        <InputGroup.Addon>{p.currency}</InputGroup.Addon>
        <FormControl type='text' value={p.amount} onChange={p.onChange} disabled={p.disabled} />
      </InputGroup>
    </FormGroup>
  );
}

export default class extends React.Component<Props> {
  onBoxClick = (e: SyntheticEvent<HTMLElement>) => {
    this.props.changeSelectedBox(Number.parseInt(e.currentTarget.id));
  };

  onValueChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value || '0';
    this.props.updateBoxValue(Number.parseFloat(value));
  };

  render () {
    const { boxes } = this.props;
    let labelClasses = 'c-currency-boxes__crossrate';
    if (this.props.isCrossRate) {
      labelClasses += ' c-currency-boxes__crossrate--visible';
    }
    return (
      <form className='c-currency-boxes'>
        <Label bsStyle='primary' className={labelClasses}>Cross Rate</Label>
        <CurrencyBox
          id='0'
          currency={boxes[0].currencyCode}
          amount={boxes[0].amount}
          onChange={this.onValueChange}
          onClick={this.onBoxClick}
          disabled={this.props.selectedBox !== 0}
        />

        <CurrencyBox
          id='1'
          currency={boxes[1].currencyCode}
          amount={boxes[1].amount}
          onChange={this.onValueChange}
          onClick={this.onBoxClick}
          disabled={this.props.selectedBox === 0}
        />
      </form>
    );
  }
}
