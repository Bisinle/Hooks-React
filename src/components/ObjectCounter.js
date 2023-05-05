import React from 'react'
import { useState } from 'react'

export default function ObjectCounter() {
  const [name, setName ]= useState ({
    firstName:'',
    lastName: ''
  })
  return (
    <form className='counter'>
      <input 
      type='text' 
      onChange={(e)=>setName({firstName:e.target.value})} />
      <input 
      type='text' 
      onChange={(e)=>setName({lastName:e.target.value})} />
      <h2>firstname: {name.firstName}</h2>
      <h2>lastname: {name.lastName}</h2>

      
    </form>
  )
}
