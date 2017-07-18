import React, { Component } from 'react';
import { connect } from 'react-redux';
import Registration from './components/Registration';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
import { progressDict, getProgress } from './reducers/progress';
import { saveQueryParams } from './actions/queryParams';
import './App.css';

class App extends Component {
  // Save plan in store before any component renders
  componentWillMount() {
    this.props.saveQueryParams()
  }

  render() {
    switch (this.props.progress) {
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
}

const mapStateToProps = state => ({
  progress: getProgress(state)
});

const mapDispatchToProps = dispatch => ({
  saveQueryParams: () => dispatch(saveQueryParams())
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
