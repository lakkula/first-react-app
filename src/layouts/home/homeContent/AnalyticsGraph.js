import React from 'react'
import analyticsGraph from '../../../assets/images/bar-chart.png'
import AnalyticsTitle from '../../../components/analyticsGraph/AnalyticsTitle'
import AnalyticsGraphLegend from './analyticsGraph/AnalyticsGraphLegend';


const analyticsLegend = [
  {
      color:'#6c8eb5',
      name:'Expences',
  },
  {
      color:'#f14a35',
      name:'Revenue',
  },
];

export default function AnalyticsGraph() {
  return (
    <div>
      <div style={{marginBottom:'20px', display:'flex', justifyContent:'space-between'}}>
        <AnalyticsTitle/>
        <div style={{display:'flex', gap:'5px'}}>
          {analyticsLegend.map((val, key) => {
            const {color, name} = val;
            return <AnalyticsGraphLegend key={key} color={color} name={name}/>
          })}
        </div>
        
      </div>
      <img src={analyticsGraph} alt='' width={'100%'} style={{height:'270px'}}/>
    </div>
  )
}
