import { connect } from 'react-redux';

import { updateBoxValue, changeSelectedBox } from 'actions';
import { getCurrencyBoxes } from 'selectors';

import CurrencyBoxes from 'components/currencyBoxes/CurrencyBoxes';

const mapDispatchToProps = {
  updateBoxValue,
  changeSelectedBox
};

const mapStateToProps = (state) => {
  const substate = getCurrencyBoxes(state);
  return { ...substate };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyBoxes);
