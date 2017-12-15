import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

export const WaitingNotification = ({ show }) => {
  if (show) {
    return (
      <div className='static-modal'>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Please wait</Modal.Title>
          </Modal.Header>
        </Modal.Dialog>
      </div>
    );
  } else {
    return null;
  }
};

WaitingNotification.propTypes = {

};

export default connect((state) => ({ show: state.pending }), (state) => ({}))(WaitingNotification);
