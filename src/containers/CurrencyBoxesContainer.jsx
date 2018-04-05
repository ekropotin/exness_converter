import { connect } from 'react-redux';

import { updateBoxValue, changeSelectedBox } from 'actions';
import { getCurrencyBoxesState } from 'selectors';

import CurrencyBoxes from 'components/currencyBoxes/CurrencyBoxes';

const mapDispatchToProps = {
  updateBoxValue,
  changeSelectedBox
};

const mapStateToProps = (state) => {
  const substate = getCurrencyBoxesState(state);
  return { ...substate };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyBoxes);
