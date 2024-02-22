import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {

    const [data, setDaata]=useState({email:"",pass:""})
    const navigate= useNavigate()
    const change=(e)=>{
        const {name , value}=e.target
        setDaata({...data,[name]:value})
    }
    console.log(data)


    // protecting nevigate to home page/
    const subb=(e)=>{
        e.preventDefault();
        localStorage.setItem("login",JSON.stringify(data))
        navigate("/")
     }  
return (
    <>
    <form onSubmit={subb}>
        <div>
<label htmlFor="name"> name</label><br />
<input type="text" name='email' placeholder='entre your name' value={data.email} onChange={change}/>
</div>

<div>
<label htmlFor="password"> password</label><br />
<input type="password" name='pass' placeholder='entre your password' value={data.pass} onChange={change}/>
</div>
<button type='submit'>submit</button>
    </form>
    
    </>
  )
}

export default LoginPage






