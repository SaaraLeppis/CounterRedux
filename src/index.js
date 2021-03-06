import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import reducer from "./components/store/reducer";

const store = createStore(reducer);
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


