import React from 'react'
import {useContext} from 'react'
import {StatusContext} from '../App'
function ComponentX() {
  const status = useContext(StatusContext);
  return(
    <div>
      <button onClick={()=>status.dispatch({type:'increment',value:10})}>HP</button>
      <button onClick={()=>status.dispatch({type:'decrement',value:10})}>MP</button>
      <button onClick={()=>status.dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default ComponentX
