import React from 'react'
import MultiColorTitle from '../../../components/promotionalCard/MultiColorTitle'
import Graph from '../../../components/promotionalCard/Graph'
import OrangeColorTest from '../../../components/promotionalCard/OrangeColorTest'
import PromotionValue from '../../../components/promotionalCard/PromotionValue'

export default function PromotionalCard() {
  return (
    <div style={{width:'280px'}}>
      <MultiColorTitle/>
      <Graph/>
      <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between'}}>
        <OrangeColorTest/>
        <PromotionValue/>
      </div>
    </div>
  )
}
