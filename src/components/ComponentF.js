import React from 'react'
import {useContext} from 'react'
import {UserInfo,LanguageInfo} from '../App'
function ComponentF() {
  const user = useContext(UserInfo)
  const language = useContext(LanguageInfo)
  return (
  <div>{user.name}:{language}</div>
      // {/* <UserInfo.Consumer>
      //   { user =>{
      //     return (
      //     <LanguageInfo.Consumer>
      //       {language => {
      //       return (<div>{user.name},{language}</div>)
      //       }}
      //     </LanguageInfo.Consumer>
      //     )
      //    }
      //   }
      // </UserInfo.Consumer> */}
  )
}

export default ComponentF
