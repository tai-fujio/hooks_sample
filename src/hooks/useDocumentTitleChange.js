import React from 'react'
import {useEffect} from 'react'

function useDocumentTitleChange(count){
  useEffect(()=>{
    document.title = `カウント${count}回`
  },[count])
}

export default useDocumentTitleChange;
