import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { isErrorShown } from '../../reducers/error';

const ErrorMessage = ({ isErrorShown }) => (
  isErrorShown && (
    <Alert bsStyle="danger">
      Your order could not be completed. Please try again.
    </Alert>
  )
)

const mapStateToProps = state => ({
  isErrorShown: isErrorShown(state)
});

const ConnectedErrorMessage = connect(mapStateToProps)(ErrorMessage);

export default ConnectedErrorMessage;
