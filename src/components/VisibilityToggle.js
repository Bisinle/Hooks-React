import React from 'react'
import { useState } from 'react'
import Visibility_Toggle_Content from './Visibility_Toggle_Content'


export default function VisibilityToggle({props}) {
//change the name 
const [changeName, setChangeName ] = useState ('Allan')

const handleChange =()=>{
  if(changeName ==='Allan'){
    setChangeName('Maria')
  }
  else{setChangeName('Allan')}
}

//toggle the visibility of the text while also changing the the text on the button from SHOWN when 
//the content is hidden to HIDE when content is shown

const [show, setShow]= useState (false)
const [changeBUTTONtext, setCahangeBUTTONtext]= useState (true)

//function to update our states with the oposite boolean value
function hide_show_content(){
  setCahangeBUTTONtext (!changeBUTTONtext)
  setShow (!show )

}

//if the changeBUTTONtext state value is true, display "show" on the button, else display "hide" the button
//and when ever the button is clicked the value changes from one boolean value  to another
var buttonText = changeBUTTONtext? 'show' : 'hide'


  return (
    <div className='counter ' >
      <h3>Visibility Toggle</h3>
      <button onClick={handleChange}>change the name</button>
      <p>{changeName}</p>


      <p>-------------------</p>  


      <button onClick={hide_show_content}> {buttonText} content</button>
      <div >     
      {
      //if our show state initial value is true, call what ever that is inside the other component and if it's falls diplay NOTHING
      //and when ever the button is clicked the value changes from one boolean value  to another, the trick here was returning or diplaying the content in here, rather than displaying it in the onClick function
      show ? <Visibility_Toggle_Content/>: null}
      </div>
   
      </div>
  )
}
