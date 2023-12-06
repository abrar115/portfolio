import React from 'react'

const Subcard = () => {
  return (
    <div className='subcard'>
    <div className='text_white_subcard'>
     <h1>A bit about me</h1>
      <p> <span className='text_gray_span'> I am a UI/UX designer who is  passionate about creating </span> beautiful  and joyful digital experiences. Besides design, I love music, games  and travelling. 
      </p>
    </div>
    <div className='subcard-img'>
    <img src='./subcard1.png' />
    <div className='subcard-img2'>
    <img src='./subcard2.png' />
    <img src='./subcard3.png' />
    </div>
    </div>
    </div>
  )
}

export default Subcard