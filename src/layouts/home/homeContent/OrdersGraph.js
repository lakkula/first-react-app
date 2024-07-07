import React from 'react'
import orderGraphImage from '../../../assets/images/graph.jpg'
import OrderGraphTitle from '../../../components/orderGraph/OrderGraphTitle'
import OrderGraphLegend from './orderGraph/OrderGraphLegend'

export default function OrdersGraph() {
  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <OrderGraphTitle/>
        <OrderGraphLegend/>
      </div>
      <img src={orderGraphImage} alt='' style={{width:'100%', height:'220px'}}/>
    </div>
  )
}

