import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'react-bootstrap';

import { WaitingNotification } from 'components/waitingNotification/WaitingNotification';

describe('<WaitingNotification />', () => {
  it('should render self', () => {
    const renderedComponent = shallow(
      <WaitingNotification show />
    );
    expect(renderedComponent.find(Modal.Dialog)).toHaveLength(1);
  });

  it('shouldnt render self', () => {
    const renderedComponent = shallow(
      <WaitingNotification />
    );
    expect(renderedComponent.instance()).toBe(null);
  });
});
