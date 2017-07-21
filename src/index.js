import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/root';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-102881712-1');

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
