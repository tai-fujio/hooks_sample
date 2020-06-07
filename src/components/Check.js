import React, {useState,useMemo} from 'react'

function Check(){
  const[num,setNum] = useState(0)

  const increment = ()=> {
    setNum(num + 1)
  }

  const isEven = useMemo(() => {
    return num % 2 === 0
  },[num])

  return (
    <div>
      <h2>{num}:{isEven?'偶数':'奇数'}</h2>
      {/* <h2>{num}:{isEven()?'偶数':'奇数'}</h2> */}
      <button onClick = {increment}>Add</button>
    </div>
  )
}

export default Check
