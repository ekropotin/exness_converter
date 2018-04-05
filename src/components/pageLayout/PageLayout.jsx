import React from 'react';

import CurrencyBoxesContainer from 'containers/CurrencyBoxesContainer';

import './PageLayout.scss';

const PageLayout = () => (
  <div className='container text-center'>
    <h1>Exchange rates</h1>
    <div className='page-layout__viewport'>
      <CurrencyBoxesContainer />
    </div>
  </div>
);

export default PageLayout;
