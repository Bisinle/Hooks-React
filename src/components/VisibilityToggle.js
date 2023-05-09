import React from 'react'
import { useState } from 'react'
import Visibility_Toggle_Content from './Visibility_Toggle_Content'


export default function VisibilityToggle({props}) {
const [visibility, setVisibility] = useState (false)
const [change, setChange ] = useState ('Allan')




//change the name 
const handleChange =()=>{
  if(change ==='Allan'){
    setChange('Maria')
  }

  else{setChange('Allan')}
}

//toggle the visibility of the text while also changing the the text on the button from SHOWN when 
//the content is hidden to HIDE when content is shown

const [show, setShow]= useState (false)
const [changeBUTTONtext, setCahangeBUTTONtext]= useState (true)


function hide_show_content(){
  setCahangeBUTTONtext (!changeBUTTONtext)
  setShow (!show )

}
var buttonText = changeBUTTONtext? 'show' : 'hide'


  return (
    <div className='counter ' >
      <h3>Visibility Toggle</h3>
      <button onClick={handleChange}>change the name</button>
      <p>{change}</p>


      <p>-------------------</p>  


      <button onClick={hide_show_content}> {buttonText} content</button>
      <div >     
      {show ? <Visibility_Toggle_Content/>: null}
      </div>
   
      </div>
  )
}
