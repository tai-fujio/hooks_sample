import React, { useState, useEffect, useRef } from 'react'

function Time() {
  const [time, setTime] = useState("00:00")
  const timeRef = useRef()
  const get_time = () => {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    if (("" + min).length === 1) {
      min = "0" + min;
    }
    let sec = now.getSeconds();
    if (("" + sec).length === 1) {
      sec = "0" + sec;
    }
    let time = hour + ":" + min + ":" + sec;
    return time;
  }
  useEffect(() => {
    timeRef.current = setInterval(() => {
      setTime(prevCount => get_time())
    }, 4500)
    return () => {
      clearInterval(timeRef.current)
    };
  }, [])

  return (
    <div>
      <h1>{time}</h1>
    </div>
  )
}

export default Time
