import React, { Component } from 'react';
import { connect } from 'react-redux';
import Registration from './components/Registration';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
import { progressDict, getProgress } from './reducers/progress';
import { isLoading } from './reducers/loading';
import { saveQueryParams } from './actions/queryParams';
import './App.css';

class App extends Component {
  // Save plan id in store before any component renders
  componentWillMount() {
    this.props.saveQueryParams()
  }

  render() {
    if (this.props.isLoading) {
      return <div>LOADING !</div>
    }

    switch (this.props.progress) {
      case progressDict.REGISTRATION:
        return <Registration/>
      case progressDict.CHECKOUT:
        return <Checkout/>
      case progressDict.CONFIRMATION:
        return <Confirmation/>
      default:
        return <Registration/>
    }
  }
}

const mapStateToProps = state => ({
  isLoading: isLoading(state),
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
