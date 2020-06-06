import React, {useState,useEffect} from 'react'

function MouseEventEffect() {
  const [x,setX] = useState(0)
  const [y,setY] = useState(0)

  const getMousePosition = e => {
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(()=>{
    window.addEventListener('mousemove',getMousePosition)
    return ()=>{
      window.removeEventListener('mousemove',getMousePosition)
    }
  },[])
  return(
    <div>
        <p>X座標 {x}</p>
        <p>Y座標 {y}</p>
    </div>
  )
}

export default MouseEventEffect
