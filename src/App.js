import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import FormHook from './components/FormHook';
import ItemHook from './components/ItemHook';
function App() {
  return (
    <div className="App">
      {/*<CounterHooks /> */}
      {/* <FormHook /> */}
      <ItemHook />
    </div>
  );
}

export default App;
