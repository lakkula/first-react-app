import React from 'react'
import rateIcon from '../../assets/images/arrow.png'

export default function FigureRate({value, text}) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
      <img src={rateIcon} alt='' style={{width:'15px'}}/>
      <p style={{color:'tomato'}}>{value}%</p><span>{text}</span>
    </div>
  )
}
