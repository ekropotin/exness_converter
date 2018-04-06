import React from 'react';

import CurrencyBoxesContainer from 'containers/CurrencyBoxesContainer';
import CurrencyListContainer from 'containers/CurrencyListContainer';

import './PageLayout.scss';

const PageLayout = () => (
  <div className='container c-page-layout'>
    <h1>Exchange rates</h1>
    <div>
      <CurrencyBoxesContainer />
      <CurrencyListContainer />
    </div>
  </div>
);

export default PageLayout;
