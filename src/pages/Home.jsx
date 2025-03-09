import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate()
    const [value,setValue]=useState('')

    const handleJoin=()=>{
             navigate(`/room/${value}`)
    }
  return (
    <>
    
    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Enter your room id' name="" id="" />
    <button onClick={handleJoin}>Join</button>
    
    </>
  )
}
