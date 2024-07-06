import React from 'react'
import ProductStatTitle from '../../../../components/productStat/ProductStatTitle'
import ProductMenuBtn from '../../../../components/productStat/ProductMenuBtn'
import SingleProductStat from './productStatCard/SingleProductStat'

export default function ProductStatCard() {
  return (
    <div style={{backgroundColor: 'pink', width: '300px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <ProductStatTitle/>
        <ProductMenuBtn/>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <SingleProductStat/>
        <SingleProductStat/>
      </div>
    </div>
  )
}
