import React ,{useState,useEffect} from 'react';

function DocumentTitleChange(){
  const [count, setCount] = useState(0)
  const countUp = ()=>{
    setCount(count + 1)
  }
  useEffect(()=>{
    document.title = `カウント${count}回`
  },[count])
  return (
    <div>
      <button onClick = {countUp}>count:{count}</button>
    </div>
  )
}

export default DocumentTitleChange
