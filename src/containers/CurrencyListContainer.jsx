import { connect } from 'react-redux';

import { updateCurrencyFilter, changeCurrency } from 'actions';
import { getCurrencyListState, getSelectedCurrency } from 'selectors';
import CurrencyList from 'components/currencyList/CurrencyList';

const mapDispatchToProps = {
  updateCurrencyFilter,
  changeCurrency
};

const mapStateToProps = (state) => {
  const substate = getCurrencyListState(state);
  return { ...substate, selectedCurrency: getSelectedCurrency(state) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
