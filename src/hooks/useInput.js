import {useState} from 'react'

function useInput(init){
  const [value,setValue] = useState(init)
  const reset = ()=>{
    setValue(init)
  }
  const bind = {
    value:value,
    onChange: e=>{
      setValue(e.target.value)
    },
  }
  return [value,bind,reset]
}
export default useInput
