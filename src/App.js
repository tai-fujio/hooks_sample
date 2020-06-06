import React from 'react';
import {createContext,useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import FormHook from './components/FormHook';
import ItemHook from './components/ItemHook';
import MouseEventEffect from './components/MouseEventEffect';
import DataFetch from './components/DataFetch';
import DataFetchId from './components/DataFetchId';
import ComponentC from './components/ComponentC';
import CounterReducer from './components/CounterReducer';
export const UserInfo = createContext({});
export const LanguageInfo = createContext();
function App() {
  const [user,setUser] = useState({name:'fujio',age:'33'});
  const [language,setLanguage] = useState('Japanese')
  return (
    <div className="App">
      <UserInfo.Provider value={user}>
        <LanguageInfo.Provider value={language} >
          <ComponentC />
        </LanguageInfo.Provider>
      </UserInfo.Provider>
      <DataFetch />
      <DataFetchId />
      <MouseEventEffect />
      <CounterHooks />
      {/* <FormHook /> */}
      {/* <ItemHook /> */}
      <CounterReducer/>

    </div>
  );
}

export default App;
