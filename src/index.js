import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

// Start Reducers
// InitialState fungsinya seperti state biasa
const initialState = {
  user: "",
  pass: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'KLIK':
      return {
        user: action.input1,
        pass: action.input2
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// End of Reducers



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
