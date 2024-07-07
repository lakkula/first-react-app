import React from 'react'
import StatFigureWithLink from './statFiguresRow/StatFigureWithLink'
import StatFigureWithMenu from './statFiguresRow/StatFigureWithMenu'

const statFigures = [
  {
    title: 'Net Revenue',
    value: '$123,000',
    rate: {
      value: '5',
      text: 'vs last month',
    },
},
  {
    title: 'Weekly Sales',
    value: '$24,000',
    rate: {
      value: '71',
      text: 'of total goals',
    },
  },
  {
    title: 'Page Visits',
    value: '423',
    rate: {
      value: '22',
      text: 'higher',
    },
  },
];

export default function StatFiguresRow() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', gap: '20px'}}>
      <StatFigureWithLink/>

      {statFigures.map((val, key) => {
        const {title, value, rate} = val;
        return <StatFigureWithMenu key={key} title={title} value={value} rate={rate}/>
      })}  
    </div>
  )
}
