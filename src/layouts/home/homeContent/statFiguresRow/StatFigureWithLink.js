import React from 'react'
import FigureStatus from '../../../../components/statFigureWithLink/FigureStatus'
import FigureDescription from '../../../../components/statFigureWithLink/FigureDescription'
import FigureLink from '../../../../components/statFigureWithLink/FigureLink'

export default function StatFigureWithLink() {
  return (
    <div style={{
      width:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      height:'100px'
      }}
      >
      <FigureStatus/>
      <FigureDescription mainTitle={"Sales revenue increased"} value={"20"} subTitle={"in 1 week"}/>
      <FigureLink/>
    </div>
  )
}
