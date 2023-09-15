import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { createStore } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import allReducers from './reducers/';

const store = createStore(allReducers);

// //Store -> Globalized State

// //ACTION INCREMENT
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// };
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// };
// const reset = () => {
//   return {
//     type: 'RESET'
//   }
// };
// //REDUCER
// const  counter = (state = 0, action) => {
//   switch(action.type) {
//     case "INCREMENT":
//       return state + 1; 
//       case "DECREMENT":
//         return state - 1; 
//       case "RESET": // Add this case to reset state to 0
//       return 0;
//     default:
//       return state;
//   }

//   //state = 0;
// };

// let store = createStore (counter);

// //Display it in the console

// store.subscribe(() => console.log("Add an event listener:", store.getState()));

// //DISPATCH
// store.dispatch(increment());
// store.dispatch(reset());
// store.dispatch(decrement());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
