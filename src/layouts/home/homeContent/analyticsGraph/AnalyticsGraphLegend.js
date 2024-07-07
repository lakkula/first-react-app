import React from 'react'
import AnalyticsLegendBox from '../../../../components/analyticsGraphLegend/AnalyticsLegendBox';
import AnalyticsLegendName from '../../../../components/analyticsGraphLegend/AnalyticsLegendName';



export default function AnalyticsGraphLegend({color, name}) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
    <AnalyticsLegendBox color={color}/>
    <AnalyticsLegendName name={name}/>
    </div>
    
  )
}
