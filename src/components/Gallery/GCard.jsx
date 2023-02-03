import React from 'react'
import './GCard.css';

const GCard = (props) => {
  return (
    <>
      <div className='card-container'><img src={props.img} alt="" className='card-container-img'/></div>
    </>
  )
}

export default GCard;