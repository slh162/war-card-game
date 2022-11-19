import React, {useState} from 'react'
import './home.css'


export default function Home(props) {
  const[name,setName]=useState('');//הכנסת שם המשתמש
  return (
    <div id='start'>
        <h1 id='war'>Ready For War</h1>
        <br />
        <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Enter your Name' />
        <br />
        <br />
        <br />
        <button onClick={()=>{props.valid(name)}}>Start</button>
    </div>
  )
}
