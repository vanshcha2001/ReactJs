// 4
import React, { useContext, useState } from 'react'
import UserContext from '../context/Usercontext'

function Login() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)  //refer UserContextProvider

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
     <div>
        <input type="text"
        value={username}
        onChange={(e)=> setUsername(e.target.value)} 
        placeholder='username'/>
        <input type="text"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}  
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
     </div>
  )
}

export default Login

// isme ye dekha data bhejna kese hai


