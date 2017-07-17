import React from 'react';
import { connect } from 'react-redux';
import Registration from './components/Registration';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
import { progressDict, getProgress } from './reducers/progress';
import './App.css';

const App = ({ progress }) => {
  switch (progress) {
    case progressDict.REGISTRATION:
      return <Registration/>
    case progressDict.CHECKOUT:
      return <Checkout/>
    case progressDict.CONFIRMATION:
      return <Confirmation/>
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
