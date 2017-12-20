// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Alert, Button } from 'react-bootstrap';

import { clearMessage } from 'actions';
import type { ClearMessage } from 'actions';

type Props = {
  data: {error: string, info: string},
  clearMessage: () => ClearMessage
};

export const Notification = (props: Props) => {
  if (!props.data.error && !props.data.info) {
    return null;
  }
  if (props.data.error) {
    return (
      <Alert bsStyle='danger' onDismiss={props.clearMessage}>
        <p>{props.data.error}</p>
      </Alert>
    );
  } else {
    return (
      <Alert bsStyle='success' onDismiss={props.clearMessage}>
        <p>{props.data.info}</p>
      </Alert>
    );
  }
};

export default connect((state) => ({ data: state.notification }), { clearMessage })(Notification);
