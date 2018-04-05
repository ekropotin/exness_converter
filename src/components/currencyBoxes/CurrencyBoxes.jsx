// @flow

import React from 'react';
import { FormGroup, InputGroup, FormControl, Tooltip } from 'react-bootstrap';

import type { CurrencyBoxIndex, CurrencyBox } from 'store/stateTypes';

type Props = {
  updateBoxValue: (number) => any,
  changeSelectedBox: (number) => any,

  isCrossRate: boolean,
  selectedBox: CurrencyBoxIndex,
  boxes: Array<CurrencyBox>
};

export default class extends React.Component<Props> {
  onBoxClick = (e: Event) => {
    this.props.changeSelectedBox(Number.parseInt(e.currentTarget.id));
  };

  onValueChange = (e: Event) => {
    const value = e.currentTarget.value ? e.currentTarget.value : 0;
    this.props.updateBoxValue(Number.parseFloat(value));
  };

  render () {
    const { boxes } = this.props;
    const firstDisabled = this.props.selectedBox !== 0;
    const secondDisabled = !firstDisabled;
    return (
      <form >
        <FormGroup id='0' onClick={this.onBoxClick}>
          <InputGroup>
            <InputGroup.Addon>{boxes[0].currencyCode}</InputGroup.Addon>
            <FormControl type='text' value={boxes[0].amount} onChange={this.onValueChange} disabled={firstDisabled} />
          </InputGroup>
        </FormGroup>

        <FormGroup id='1' onClick={this.onBoxClick}>
          <InputGroup>
            <InputGroup.Addon>{boxes[1].currencyCode}</InputGroup.Addon>
            <FormControl type='text' value={boxes[1].amount} onChange={this.onValueChange} disabled={secondDisabled} />
          </InputGroup>
        </FormGroup>

      </form>
    );
  }
}
