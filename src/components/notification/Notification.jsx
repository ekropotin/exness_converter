import React from 'react';
import { connect } from 'react-redux';
import { Alert, Button } from 'react-bootstrap';

import { clearMessage } from 'actions';

export const Notification = ({ data, clearMessage }) => {
  if (!data.error && !data.info) {
    return null;
  }
  if (data.error) {
    return (
      <Alert bsStyle='danger' onDismiss={clearMessage}>
        <p>{data.error}</p>
      </Alert>
    );
  } else {
    return (
      <Alert bsStyle='success' onDismiss={clearMessage}>
        <p>{data.info}</p>
      </Alert>
    );
  }
};

Notification.propTypes = {

};

export default connect((state) => ({ data: state.notification }), { clearMessage })(Notification);
