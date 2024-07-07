import React from 'react'

export default function SingleLegendBox({shade}) {
  return (
    <div>
        <div
        style={{width:'10px', height:'10px', backgroundColor: `rgb(216,17,195,${shade})`}}
        ></div>
    </div>
  )
}
