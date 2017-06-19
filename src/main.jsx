import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import IncrementButton from './containers/increment-button';
import DecrementButton from './containers/decrement-button';
import TimesButton from './containers/times-button';
import CounterMessage from './containers/counter-message';
import couterReducer from './reducers/CounterReducer';

const store = createStore(combineReducers({
  calc: couterReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <CounterMessage />
      <IncrementButton />
      <DecrementButton />
      <TimesButton />
    </div>
  </Provider>
  , document.getElementById('mainContainer'),
);
