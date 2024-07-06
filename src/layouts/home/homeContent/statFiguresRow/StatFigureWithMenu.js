import React from 'react'
import FigureTitle from '../../../../components/statFigureWithMenu/FigureTitle'
import FigureMenuBtn from '../../../../components/statFigureWithMenu/FigureMenuBtn'
import FigureValue from '../../../../components/statFigureWithMenu/FigureValue'
import FigureRate from '../../../../components/statFigureWithMenu/FigureRate'

export default function StatFigureWithMenu({title}) {
  return (
    <div style={{width:'100%'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <FigureTitle title={title}/>
        <FigureMenuBtn/>
      </div>
      <FigureValue/>
      <FigureRate/>
    </div>
  )
}
