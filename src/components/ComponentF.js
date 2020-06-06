import React from 'react'
import {UserInfo,LanguageInfo} from '../App'
function ComponentF() {
  return(
    <div>
      <UserInfo.Consumer>
        { user =>{
          return (
          <LanguageInfo.Consumer>
            {language => {
            return (<div>{user.name},{language}</div>)
            }}
          </LanguageInfo.Consumer>
          )
         }
        }
      </UserInfo.Consumer>
    </div>
  )
}

export default ComponentF
