import React from 'react'
import SubtitleWithIcon from '../../../../../components/productStat/singleProductStat/SubtitleWithIcon'
import StatValue from '../../../../../components/productStat/singleProductStat/StatValue'
import ProductStatRate from '../../../../../components/productStat/singleProductStat/ProductStatRate'

export default function SingleProductStat({title, value, rateInfo}) {
  const {rate, text} = rateInfo;
  return (
    <div
      style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        height:'80px'
      }}
    >
      <SubtitleWithIcon title={title}/>
      <StatValue value={value}/>
      <ProductStatRate rate={rate} text={text}/>
    </div>
  )
}
