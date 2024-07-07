import React from 'react'
import SingleLegendBox from '../../../../components/orderGraphLegend/SingleLegendBox'
import LegendValue from '../../../../components/orderGraphLegend/LegendValue'

export default function OrderGraphLegend() {
  return (
    <div style={{display:'flex', gap:'5px', alignItems:'center'}}>
        <LegendValue value={0}/>
        {Array.from({length: 5}).map((_,key) =>{
            return <SingleLegendBox key={key} shade={(key + 1) / 6}/>
        })}
        <LegendValue value={100}/>
    </div>
  )
}
