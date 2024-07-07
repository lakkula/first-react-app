import React from 'react'

export default function FigureStatus() {
  return (
    <div style={{display:'flex', alignItems:'center', gap:'7px'}}>
      <div style={{
        width:'10px',
        height:'10px',
        backgroundColor:'tomato',
        borderRadius:'50%'
      }}
      ></div>
      <p>Update</p>
    </div>
  )
}
