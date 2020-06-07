import React from 'react'
import {useEffect,useRef,useState} from 'react'
import AutoCount from './AutoCount'

function FocusInput() {
  const [string,setString] = useState('Input Here!')
  const input = useRef('Input here!')
  useEffect(()=>{
    input.current.focus()
  },[])
  return (
    <div>
      <h1>useRef!</h1>
      <input ref={input} type="text" value = {string}></input>
      <AutoCount />
    </div>
  )
}

export default FocusInput
