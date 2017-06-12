import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Counter from './Counter/App';
import couterReducer from './Counter/reducers/CounterReducer';

const store = createStore(combineReducers({
  calc: couterReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>
  , document.getElementById('mainContainer'),
);
