import React , {useReducer} from 'react'

const init = {
  first: 0,
  second: 0,
}
const reducer = (state,action) => {
  switch(action.type){
    case 'increment1':
      return {...state,first: state.first + action.value}
    case 'decrement1':
      return {...state,first: state.first - action.value}
    case 'increment2':
      return {...state,second: state.second + action.value}
    case 'decrement2':
      return {...state,second: state.second - action.value}
    case 'reset':
      return init
    default:
      return state
  }
}
function CounterReducer(){
  const [count, dispatch] = useReducer(reducer, init)
  return (
    <div>
      <h1>カウント1:{count.first}</h1>
      <h1>カウント2:{count.second}</h1>
      <button onClick={() => dispatch({type:'increment1',value:1})}>プラス</button>
      <button onClick={() => dispatch({type:'decrement1',value:1})}>マイナス</button>
      <button onClick={() => dispatch({type:'increment2',value:5})}>プラス5</button>
      <button onClick={() => dispatch({type:'decrement2',value:5})}>マイナス5</button>
      <button onClick={() => dispatch({type:'reset'})}>リセット</button>
    </div>
  )
}

export default CounterReducer
