import React, {useState,useEffect,useRef} from 'react'

function Count(){
  const[count,setCount] = useState(0)
  const timeRef = useRef()
  useEffect(()=>{
    timeRef.current = setInterval(()=>{
      setCount(prevCount => prevCount + 1)
    },1000)
    return ()=>{
      clearInterval(timeRef.current)
    };
  },[])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{clearInterval(timeRef.current)}}>Stop</button>
    </div>
  )
}

export default Count
