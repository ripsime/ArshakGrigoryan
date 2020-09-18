import React from 'react';
import ReactDOM from 'react-dom';

import './normalize.css';
import './index.less';

import App from './components/app/app';

import { Provider } from "react-redux";

import store from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);