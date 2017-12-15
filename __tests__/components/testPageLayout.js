import React from 'react';
import { shallow } from 'enzyme';

import PageLayout from 'components/pageLayout/PageLayout';
import ShoppingCartTableContainer from 'containers/ShoppingCartTableContainer';
import Buttons from 'containers/ShoppingCartButtonsContainer';
import WaitingNotification from 'components/waitingNotification/WaitingNotification';
import Notification from 'components/notification/Notification';

describe('<PageLayout />', () => {
  it('should render child components', () => {
    const renderedComponent = shallow(
      <PageLayout />
    );

    // console.log(renderedComponent.debug());
    expect(renderedComponent.contains(<Notification />)).toBe(true);
    expect(renderedComponent.contains(<WaitingNotification />)).toBe(true);
    expect(renderedComponent.contains(<ShoppingCartTableContainer />)).toBe(true);
    expect(renderedComponent.contains(<Buttons />)).toBe(true);
  });
});
