import React from 'react'
import FigureTitle from '../../../../components/statFigureWithMenu/FigureTitle'
import FigureMenuBtn from '../../../../components/statFigureWithMenu/FigureMenuBtn'
import FigureValue from '../../../../components/statFigureWithMenu/FigureValue'
import FigureRate from '../../../../components/statFigureWithMenu/FigureRate'

export default function StatFigureWithMenu() {
  return (
    <div>
      <FigureTitle/>
      <FigureMenuBtn/>
      <FigureValue/>
      <FigureRate/>
    </div>
  )
}
