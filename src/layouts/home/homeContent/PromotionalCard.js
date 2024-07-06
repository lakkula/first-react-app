import React from 'react'
import MultiColorTitle from '../../../components/promotionalCard/MultiColorTitle'
import Graph from '../../../components/promotionalCard/Graph'
import OrangeColorTest from '../../../components/promotionalCard/OrangeColorTest'
import PromotionValue from '../../../components/promotionalCard/PromotionValue'

export default function PromotionalCard() {
  return (
    <div style={{backgroundColor: 'teal'}}>
      <MultiColorTitle/>
      <Graph/>
      <OrangeColorTest/>
      <PromotionValue/>
    </div>
  )
}
