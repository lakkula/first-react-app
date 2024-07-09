import React from 'react'
import orderGraphImage from '../../../assets/images/graph.jpg'
import OrderGraphLegend from './orderGraph/OrderGraphLegend'
import SectionTitle from '../../../components/common/SectionTitle'

export default function OrdersGraph() {
  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <SectionTitle title={'Orders'}/>
        <OrderGraphLegend/>
      </div>
      <img src={orderGraphImage} alt='' style={{width:'100%', height:'220px'}}/>
    </div>
  )
}

