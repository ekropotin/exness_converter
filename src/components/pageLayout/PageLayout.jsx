import React from 'react';

import ShoppingCartTableContainer from 'containers/ShoppingCartTableContainer';
import Buttons from 'containers/ShoppingCartButtonsContainer';
import WaitingNotification from 'components/waitingNotification/WaitingNotification';
import Notification from 'components/notification/Notification';

import './PageLayout.scss';

const PageLayout = () => (
  <div className='container text-center'>
    <h1>Exness basket</h1>
    <div className='page-layout__viewport'>
      <Notification />
      <WaitingNotification />
      <ShoppingCartTableContainer />
      <Buttons />
    </div>
  </div>
);

export default PageLayout;
