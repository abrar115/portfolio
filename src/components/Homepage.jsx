import React from 'react'

function Homepage() {
  return (
    <div className='homepage'>
    <p className='homepage-sentence'>I'm a designer specialising in  &nbsp;
   <span className='span'>UI/UK &nbsp;   </span> and &nbsp; <span className='span'>Interaction Design</span></p>
   <div className='drop-down-div'>
   <svg className='drop-down' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" >
   <path d="M10 15L20 25L30 15" stroke="#E3E4E6" stroke-width="2.67" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>
 </div>
 <div >
 <p className='client-sentence'>Some of &nbsp; <span className="span"> the clients I have <br/> designed for</span></p></div>
   </div>
  )
}

export default Homepage