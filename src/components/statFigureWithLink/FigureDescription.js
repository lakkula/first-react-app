import React from 'react'

export default function FigureDescription({mainTitle, value, subTitle}) {
  return (
    <div style={{fontWeight:'bold'}}>
      <p>{mainTitle}</p>
      <p><span style={{color:'tomato'}}>{value}%</span>{subTitle}</p>
    </div>
  )
}
