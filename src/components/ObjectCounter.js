import React from 'react'
import { useState } from 'react'

export default function ObjectCounter() {
  //my state and it's objects
  const [names, setNames ]= useState ({
    firstName:'',
    lastName: ''
  })

function HandleChange(e){
  const {name,value}=e.target
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

      <h4>fName: {names.firstName}</h4> 
      <h4>lName: {names.lastName}</h4> 

      {/* <h2>{JSON.stringify(names)}</h2>  this is to display what ever our state variable is storing as it is storing it */}
      

      
    </form>
  )
}
/**
this is to individually update eache object propert and then merge them togehter using the spread operatior
<input 
type='text' 
onChange={(e) =>setNames({...names,firstName: e.target.value})} 
name='firstName'/>
 <label>lastName</label>
<input 
type='text' 
onChange={(e) =>setNames({...names,lastName: e.target.value})} 
name='lastName'/>
 */