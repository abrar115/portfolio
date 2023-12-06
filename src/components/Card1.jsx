import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
const Card1 = () => {
  return (
    <div>
    <h1 className="selected_work">
    Selected <strong className="text_white">Works</strong>
  </h1>
  <div className="card1">
    <div className="">
      <img src='stockimg1.png' alt="card_1" />
    </div>
    <div className="card_text">
      <p className="text_white">Real estate Template</p>
      <p className="text_gray">
        Lorem ipsum dolor sit amet, consectetur{" "}
        <strong className="text_white">
          adipiscing elit. Ultrices lorem non feugiat egestas amet.
        </strong>
      </p>
      <p className="text_under">Website Design</p>
      <button className='button'>View work <FaGreaterThan/></button>
    </div>
      </div></div>
  )
}

export default Card1