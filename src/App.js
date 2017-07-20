import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from './components/Loader';
import Registration from './components/Registration';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
import {progressDict, getProgress} from './reducers/progress';
import {saveQueryParams} from './actions/queryParams';
import './App.css';

class App extends Component {
  // Save plan id in store before any component renders
  componentWillMount() {
    this.props.saveQueryParams()
  }

  render() {
    const progressToComponentMap = {
      [progressDict.REGISTRATION]: <Registration/>,
      [progressDict.CHECKOUT]: <Checkout/>,
      [progressDict.CONFIRMATION]: <Confirmation/>
    }

    const content = progressToComponentMap[this.props.progress];

    return (
      <div>
        <Loader/>
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  progress: getProgress(state)
});

const mapDispatchToProps = dispatch => ({
  saveQueryParams: () => dispatch(saveQueryParams())
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
