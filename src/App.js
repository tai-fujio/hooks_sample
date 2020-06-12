import React from 'react';
import { createContext, useState, useReducer, useEffect } from 'react';
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
import axios from 'axios'
import WrapComponent from './components/WrapComponent';
import Check from './components/Check'
import FocusInput from './components/FocusInput'
import DocumentTitleChange from './components/DocumentTitleChange';
import DocumentTitleChangeNew from './components/DocumentTitleChangeNew';
import Form from './components/Form'
import Mytodo from './components/Mytodo'
import Time from './components/Time'
export const UserInfo = createContext({});
export const LanguageInfo = createContext();
export const StatusContext = createContext({});

const apiInitialState = {
  loading: true,
  error: '',
  post: {},
}
const initialState = { HP: 0, MP: 0 }
const globalReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, HP: state.HP + action.value }
    case 'decrement':
      return { ...state, MP: state.MP + action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'Success':
      return {
        loading: false,
        post: action.payload,
        error: '',
      }
    case 'Error':
      return {
        loading: false,
        post: {},
        error: 'failed to fetch data',
      }
    default:
      return state
  }
}
function App() {
  const [apiState, apiDispatch] = useReducer(apiReducer, apiInitialState)
  const [status, dispatch] = useReducer(globalReducer, initialState)
  const [user, setUser] = useState({ name: 'fujio', age: '33' })
  const [language, setLanguage] = useState('Japanese')
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')

      .then(res => {
        apiDispatch({ type: 'Success', payload: res.data });
      })
      .catch(err => {
        apiDispatch({ type: 'Error' })
      })
  }, [])
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
      <CounterReducer />
      <h1>{status.HP}/{status.MP}</h1>
      <StatusContext.Provider value={{ dispatch: dispatch, status: status }}>
        {/* <StatusContext.Provider value = {{dispatch:dispatch,status:status}}> */}
        <ComponentX />
        <ComponentY />
        <ComponentZ />
      </StatusContext.Provider>
      <h1>{apiState.loading ? 'Now Loading...' : apiState.post.body}</h1>
      <h2>{apiState.error ? apiState.error : 'Nothing Error'}</h2>
      <WrapComponent />
      <Check />
      <FocusInput />
      <DocumentTitleChange />
      <DocumentTitleChangeNew />
      <Form />
      <div className="app">
        <button className="button_todo0">Appコンポーネント</button>
        <div className="time">
          <h1>MY TODO LIST</h1>
          <Time />
        </div>
        <div className="todo-list">
          <Mytodo />
        </div>
      </div>
    </div>
  );
}

export default App;
