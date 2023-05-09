import React from 'react'
import { useState } from 'react'

export default function CharControl() {

  const [charCount, setCharCount]=useState ()

  function inputHandle (e){
    e.preventDefault()
    let inputText = Array.from(e.target.value)
    setCharCount(inputText.length)
    
  }

  // console.log(charCount);
  return (
    <div className='counter'>
      <h3>Character Counter</h3>
      <input type='text' 
      placeholder='Enter text'
      onChange={inputHandle}/>
      <h3>{charCount} characters</h3>

      
    </div>
  )
}
