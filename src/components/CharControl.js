import React from 'react'
import { useState } from 'react'

export default function CharControl() {

  const [charCount, setCharCount]=useState ()

  function inputHandle (e){
    e.preventDefault()
    let Character = e.target.value

    let charnospace = Character.trim()
    let inputText = Array.from(charnospace)
    setCharCount(inputText.length)
    
  }

  // console.log(charCount);
  return (
    <div className='counter'>
      <h3>Character Counter</h3>
      <p>display the number of characters typed into to the input field without white-spaces</p>
      <input type='text' 
      placeholder='Enter text'
      onChange={inputHandle}/>
      <h3>{charCount} characters</h3>

      
    </div>
  )
}
