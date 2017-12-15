import React from 'react';
import { mount } from 'enzyme';

import { Notification } from 'components/notification/Notification';

describe('<Notification />', () => {
  it('should render info', () => {
    const renderedComponent = mount(
      <Notification data={{ info: 'test info', error: null }} />
    );
    expect(renderedComponent.find('div').hasClass('alert-success')).toBe(true);
    expect(renderedComponent.find('p').text()).toBe('test info');
  });

  it('should render error', () => {
    const renderedComponent = mount(
      <Notification data={{ info: null, error: 'test error' }} />
    );
    expect(renderedComponent.find('div').hasClass('alert-danger')).toBe(true);
    expect(renderedComponent.find('p').text()).toBe('test error');
  });

  it('shouldnt render anything', () => {
    const renderedComponent = mount(
      <Notification data={{ info: null, error: null }} />
    );
    expect(renderedComponent.instance()).toBe(null);
  });
});
