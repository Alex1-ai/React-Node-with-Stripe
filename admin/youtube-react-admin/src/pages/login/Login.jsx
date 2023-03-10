import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from "../../redux/apiCalls"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleClick = (e)=>{
        e.preventDefault()
        login(dispatch,{
            username, password
        })
    }
  
    return (
    <div style={{
        display:"flex" ,
        height: "100vh", 
        alignItems:"center",
         justifyContent:"center",
         flexDirection:"column"
         }}>
        <input style={{padding: 10, marginBottom:20}}  type="text" placeholder='Username' onChange={e=>setUsername(e.target.value)} />
        <input style={{padding: 10, marginBottom:20}} type="password" name="" placeholder='Password' onChange={e=>setPassword(e.target.value)} />
        <button style={{ padding: 10, width: 100}} onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login