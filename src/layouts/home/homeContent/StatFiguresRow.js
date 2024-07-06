import React from 'react'
import StatFigureWithLink from './statFiguresRow/StatFigureWithLink'
import StatFigureWithMenu from './statFiguresRow/StatFigureWithMenu'

export default function StatFiguresRow() {
  return (
    <div style={{backgroundColor: 'yellowgreen', display: 'flex'}}>
      <StatFigureWithLink/>
      <StatFigureWithMenu/>
      <StatFigureWithMenu/>
      <StatFigureWithMenu/>
    </div>
  )
}
