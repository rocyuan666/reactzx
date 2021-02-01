import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from "react-redux";

import store from "./store";

// import App from './App手动联系手动联系';
// import App from './App-react-redux联系';
import App from './App-redux-thunk应用请求数据';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);