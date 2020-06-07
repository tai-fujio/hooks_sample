import React, {useState} from 'react'
import useInput from '../hooks/useInput'
function Form(){
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  const [firstName, bindFirstName,resetFirstName] = useInput('')
  const [lastName, bindLastName,resetLastName] = useInput('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    // alert(`${firstName}${lastName}`)
    resetFirstName();
    resetLastName();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstName}></input>
          {/* <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)}></input> */}
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindLastName}></input>
          {/* <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)}></input> */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
