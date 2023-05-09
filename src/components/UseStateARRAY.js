import React from 'react'
import { useState } from 'react'

export default function UseStateARRAY() {
  const [items, setItems] =  useState([])


  function add (){
    setItems([...items,{
      id:items.length,
      value: Math.floor(Math.random()*10)+1

    }])
  }


  return (
    <div className='counter meh '>
    <h3>State Array</h3>
      <button onClick={add}>Add a number</button>
      <ul>
       
          {items.map((item)=>( 
            <li key={item.id}>{item.value}</li>

          ))}
      
      </ul>

      {/* <h1>{JSON.stringify(items)}</h1> */}
      
    </div>
  )
}
