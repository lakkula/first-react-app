import React from 'react'
import FigureStatus from '../../../../components/statFigureWithLink/FigureStatus'
import FigureDescription from '../../../../components/statFigureWithLink/FigureDescription'
import FigureLink from '../../../../components/statFigureWithLink/FigureLink'

export default function StatFigureWithLink() {
  return (
    <div>
      <FigureStatus/>
      <FigureDescription/>
      <FigureLink/>
    </div>
  )
}
