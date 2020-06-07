import React from 'react';
import {createContext,useState,useReducer} from 'react';
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
import ComponentX from './components/ComponentX';
import ComponentY from './components/ComponentY';
import ComponentZ from './components/ComponentZ';
export const UserInfo = createContext({});
export const LanguageInfo = createContext();
export const StatusContext = createContext({});

const initialState = {HP: 0, MP: 0}
const globalReducer = (state,action)=> {
  switch(action.type){
    case 'increment':
      return {...state, HP : state.HP + 10}
    case 'decrement':
      return {...state, MP : state.MP + 10}
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [status,dispatch] = useReducer(globalReducer,initialState)
  const [user,setUser] = useState({name:'fujio',age:'33'})
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
      <h1>{status.HP}/{status.MP}</h1>
      <StatusContext.Provider value = {{dispatch:dispatch,status:status}}>
      {/* <StatusContext.Provider value = {{dispatch:dispatch,status:status}}> */}
        <ComponentX />
        <ComponentY />
        <ComponentZ />
      </StatusContext.Provider>

    </div>
  );
}

export default App;
