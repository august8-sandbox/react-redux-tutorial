import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Counter from './App';
import couterReducer from './reducers/CounterReducer';

const store = createStore(combineReducers({
  calc: couterReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>
  , document.getElementById('mainContainer'),
);
