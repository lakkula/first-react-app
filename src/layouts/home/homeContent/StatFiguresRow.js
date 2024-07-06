import React from 'react'
import StatFigureWithLink from './statFiguresRow/StatFigureWithLink'
import StatFigureWithMenu from './statFiguresRow/StatFigureWithMenu'

const statFigures = [
  {title: 'Net Revenue'},
  {title: 'Weekly Sales'},
  {title: 'Page Visits'},
];

export default function StatFiguresRow() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', gap: '20px'}}>
      <StatFigureWithLink/>

      {statFigures.map((val, key) => {
        const {title} = val;
        return <StatFigureWithMenu key={key} title={title}/>
      })}  
    </div>
  )
}
