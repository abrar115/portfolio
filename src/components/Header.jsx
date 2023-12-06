import React from 'react'
import dezion from "/public/dezion.png"
function Header() {
  return (
    <div className='heading'>
    <img src={dezion} /> 
    <div className='search-bar.div'>
    <ul>
    <li className='lihome'>Home</li>
    <li>Work</li>
    <li>About</li>
    </ul>
    </div>
    </div>
  )
}

export default Header