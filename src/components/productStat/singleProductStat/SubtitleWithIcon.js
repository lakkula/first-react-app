import React from 'react'
import prductSmallIcon from '../../../assets/images/gift-box.png'

export default function SubtitleWithIcon({title}) {
  return (
    <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
      <img src={prductSmallIcon} alt='' style={{width:'15px'}}/>
      <p>{title}</p>
    </div>
  )
}
