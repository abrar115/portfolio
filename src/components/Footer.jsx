import React from 'react'

function Footer() {
  return (
    <div className='footer'>
    <div className='footer_content'>
    <div className='footer_header'>
     <h1> <span className='text_gray_span'> Get </span> in Touch.</h1>
     <div className='footer_paragraph'>
     <p> so that we can talk about it</p>
     </div>
    <div className='footer-logos'>
    <ul className='list-logos'>
    <a href='mailto:abrar.alrahman@gmail.com' target='blank'>
   <li> <img src='footer2.png' /></li>
   </a>
   <a href='https://www.behance.net/' target='blank'>
   <li>  <img src='footer3.png' /> </li> </a>
   <a href='https://www.linkedin.com/' target='blank'>
   <li>  <img src='footer.png' /></li> </a>
   <a href='https://www.linkedin.com/' target='blank'>
   <li>  <img src='footer1.png' /> </li> </a>
        </ul>
        </div>
        <div className='footer_copyright'>
        <p className='footer_end'>Made with ❣️ by &nbsp; <span className='footer_end_span'> Abrar</span></p>
     </div>
    </div>
    </div>
    </div> 
  )
}

export default Footer