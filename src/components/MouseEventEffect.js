import React, {useState, useEffect} from 'react'

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
      <ul>
        <li>X座標 {x}</li>
        <li>Y座標 {y}</li>
      </ul>
    </div>
  )
}

export default MouseEventEffect
