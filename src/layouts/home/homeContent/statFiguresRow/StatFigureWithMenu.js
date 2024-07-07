import React from 'react'
import FigureTitle from '../../../../components/statFigureWithMenu/FigureTitle'
import FigureMenuBtn from '../../../../components/statFigureWithMenu/FigureMenuBtn'
import FigureValue from '../../../../components/statFigureWithMenu/FigureValue'
import FigureRate from '../../../../components/statFigureWithMenu/FigureRate'

export default function StatFigureWithMenu({title, value, rate}) {
  const {value: rateValue, text} = rate;
  return (
    <div style={{
      width:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      height:'100px'
      }}
      >
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <FigureTitle title={title}/>
        <FigureMenuBtn/>
      </div>
      <FigureValue value={value}/>
      <FigureRate value={rateValue} text={text}/>
    </div>
  )
}
