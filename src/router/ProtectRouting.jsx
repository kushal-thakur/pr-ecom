import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectRouting = ({component: Component}) => {

    const navigate= useNavigate()

    useEffect(()=>{
        const email= localStorage.getItem("login")

        if(!email){
            navigate("/loginpg")
        }else{
            navigate("/")
        }
    },[navigate])
  return (
    <div>{Component&&<Component/>}</div>
  )
}

export default ProtectRouting