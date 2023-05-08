import React from 'react'
import { useState } from 'react'

export default function ObjectCounter() {
  //my state and it's objects
  const [names, setNames ]= useState ({
    firstName:'',
    lastName: ''
  })

function HandleChange(e){
  const name = e.target.name
  const value = e.target.value
  setNames((prev)=>{
    return{...prev, [name]:value}
  })
  
 
}
console.log(names);
  return (
    <form className='counter'>

      
      <label>firstName</label>
      
      <input 
      type='text' 
      onChange={HandleChange} name='firstName'/>
       <label>lastName</label>
      <input 
      type='text' 
      onChange={HandleChange} name='lastName'/>

      <h2>{JSON.stringify(names)}</h2>
      

      
    </form>
  )
}
