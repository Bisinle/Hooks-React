import React from 'react'
import { useState } from 'react'

export default function FunctionalCounter() {
  const [ count ,  setCount] = useState (0)

  function increment () {
    setCount (count +1)
  }

  function increment5 (){
    for (let i=0; i<5 ; i++){ 
    setCount(prevCount => prevCount +1)
    }
  }
  return (
    <div className='counter'>
      <h1>{count}</h1>
      <button className='btn' onClick={increment}>increment</button>
      <button className='btn' onClick={()=>setCount(count-1)}>decrement</button>
      <button className='btn' onClick={()=>setCount(0)}>reset</button>
      <button className='btn' onClick={increment5}>increment 5</button>


    </div>
  )
}
