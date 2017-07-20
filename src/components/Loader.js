import React from 'react';
import {isLoading} from '../reducers/loading';
import { connect } from 'react-redux';

const loaderStyles = {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: 1000,
  opacity: 0.8,
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center'
}

const Loader = ({ isLoading }) => (
  isLoading && (
    <div style={loaderStyles}>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  )
);

const mapStateToProps = state => ({
  isLoading: isLoading(state)
});

const connectedLoader = connect(mapStateToProps)(Loader);

export default connectedLoader;
