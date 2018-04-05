// @flow

import React from 'react';
import { FormGroup, InputGroup, FormControl, Tooltip } from 'react-bootstrap';

import { updateBoxValue, changeSelectedBox } from 'actions';
import type { CurrencyBoxId, CurrencyBox } from 'store/stateTypes';

type Props = {
  updateBoxValue: (number) => any,
  changeSelectedBox: (CurrencyBoxId) => any,

  isCrossRate: boolean,
  selectedBox: CurrencyBoxId,
  firstBox: CurrencyBox,
  secondBox: CurrencyBox
};

export default class extends React.Component<Props> {
  onBoxClick = (e: Event) => {
    this.props.changeSelectedBox(e.currentTarget.id);
  };

  onValueChange = (e: Event) => {
    const value = parseFloat(e.currentTarget.value);
    this.props.updateBoxValue(value);
  };

  render () {
    const firstDisabled = this.props.selectedBox !== this.props.firstBox.id;
    const secondDisabled = this.props.selectedBox !== this.props.secondBox.id;

    return (
      <form >
        <FormGroup id={this.props.firstBox.id} onClick={this.onBoxClick}>
          <InputGroup>
            <InputGroup.Addon>{this.props.firstBox.currencyCode}</InputGroup.Addon>
            <FormControl type='text' value={this.props.firstBox.amount} onChange={this.onValueChange} disabled={firstDisabled} />
          </InputGroup>
        </FormGroup>

        <FormGroup id={this.props.secondBox.id} onClick={this.onBoxClick}>
          <InputGroup>
            <InputGroup.Addon>{this.props.secondBox.currencyCode}</InputGroup.Addon>
            <FormControl type='text' value={this.props.secondBox.amount} onChange={this.onValueChange} disabled={secondDisabled} />
          </InputGroup>
        </FormGroup>

      </form>
    );
  }
}
