import React from 'react';
import { connect } from 'react-redux';
import Registration from './components/Registration';
import Checkout from './components/Checkout';
import { getProgress } from './reducers/progress';
import './App.css';

const App = ({ progress }) => {
  switch (progress) {
    case 'registration':
      return <Registration/>
    case 'checkout':
      return <Checkout/>
    default:
      return <div>BUG BUG BUG</div>
  }
}

const mapStateToProps = state => ({
  progress: getProgress(state)
})

const ConnectedApp = connect(
  mapStateToProps
)(App);

export default ConnectedApp;
