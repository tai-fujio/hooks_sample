import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import FormHook from './components/FormHook';
import ItemHook from './components/ItemHook';
import MouseEventEffect from './components/MouseEventEffect';
import DataFetch from './components/DataFetch';
import DataFetchId from './components/DataFetchId';
function App() {
  return (
    <div className="App">
      <DataFetch />
      <DataFetchId />
      <MouseEventEffect />
      <CounterHooks />
      {/* <FormHook /> */}
      {/* <ItemHook /> */}
    </div>
  );
}

export default App;
