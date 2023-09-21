import React from 'react';
//import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { createStore } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
//import ReactMarkdown from 'react-markdown';
//import {marked} from "https://esm.sh/marked";
//import {marked} from "marked";

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} > {/* Wrap your App component with Provider and pass the store */}
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>
  </Provider>,
);

// ReactDOM.render (
//   <Provider store={store}>
//      <App/>
//   </Provider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
