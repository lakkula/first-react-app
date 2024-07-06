import React from 'react'
import FigureStatus from '../../../../components/statFigureWithLink/FigureStatus'
import FigureDescription from '../../../../components/statFigureWithLink/FigureDescription'
import FigureLink from '../../../../components/statFigureWithLink/FigureLink'

export default function StatFigureWithLink() {
  return (
    <div style={{backgroundColor: 'orange'}}>
      <FigureStatus/>
      <FigureDescription/>
      <FigureLink/>
    </div>
  )
}
