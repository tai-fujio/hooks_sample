import React ,{useState} from 'react';
import useDocumentTitleChange from '../hooks/useDocumentTitleChange'

function DocumentTitleChangeNew(){
  const [count, setCount] = useState(0)
  const countUp = ()=>{
    setCount(count + 1)
  }
  useDocumentTitleChange(count)
  // useEffect(()=>{
  //   document.title = `カウント${count}回`
  // },[count])
  return (
    <div>
      <button onClick = {countUp}>count:{count}</button>
    </div>
  )
}

export default DocumentTitleChangeNew
