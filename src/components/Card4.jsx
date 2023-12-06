import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Card4 = () => {
  return (
    <div>
  <div className="card1">
    <div className="card_text">
      <p className="text_white">Logo Animation</p>
      <p className="text_gray">
        Lorem ipsum dolor sit amet, consectetur{" "}
        <strong className="text_white">
          adipiscing elit.  Ultrices lorem non feugiat egestas amet.
        </strong>
      </p>
      <p className="text_under">Animation</p>
      <button className='button2'>View work <FaArrowRight/></button>
    </div>
    <div className="card2img">
    <img src='card4.png' alt="card_1" />
  </div>
      </div>
</div>
  )
}

export default Card4