import React from 'react';
import IncrementButton from './containers/increment-button';
import DecrementButton from './containers/decrement-button';
import CounterMessage from './containers/counter-message';

const App = () => (
  <div>
    <CounterMessage />
    <IncrementButton />
    <DecrementButton />
  </div>
);

export default App;
