import React from 'react'
import airbnb from "/public/airbnb.png"
import google from "/public/google.png"
import microsoft from "/public/microsoft.png"
import fedex from "/public/fedex.png"
function Logos() {
  return (
    <div className='designed-logos'>
    <ul className='listed-logos'>
   <li> <img src={airbnb} /></li>
   <li>  <img src={google} /> </li>
   <li>  <img src={microsoft} /></li>
   <li>  <img src={fedex} /> </li>
        </ul>
     </div>
  )
}

export default Logos