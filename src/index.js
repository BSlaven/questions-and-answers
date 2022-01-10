import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import rootSaga from './sagas/saga';

const store = configureStore();
store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);