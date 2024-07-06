import React from 'react'
import rateIcon from '../../../assets/images/arrow.png'

export default function ProductStatRate({rate, text}) {
  return (
    <div style={{display:'flex', alignItems:'center'}}>
      <img src={rateIcon} alt='' style={{width:'15px'}}/>
      <p style={{color:'tomato'}}>
        {rate}
        <span style={{color:'gray'}}>
          {text}
        </span>
      </p>
    </div>
  )
}
