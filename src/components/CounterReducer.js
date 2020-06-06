import React , {useReducer} from 'react'

const init = 0
const reducer = (state,action) => {
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
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
      <h1>カウント:{count}</h1>
      <button onClick={() => dispatch('increment')}>プラス</button>
      <button onClick={() => dispatch('decrement')}>マイナス</button>
      <button onClick={() => dispatch('reset')}>リセット</button>
    </div>
  )
}

export default CounterReducer
