import React from 'react'
import ProductMenuBtn from '../../../../components/productStat/ProductMenuBtn'
import SingleProductStat from './productStatCard/SingleProductStat'
import SectionTitle from '../../../../components/common/SectionTitle';

const statData = [
  {
    title:'Product Launched',
    value:'433',
    rateInfo: {
      rate:'avg, 12',
      text:'product added',
    },
  },
  {
    title:'Product Sold',
    value:'223',
    rateInfo: {
      rate:'15%',
      text:'vs last 3 month',
    },
  },
];

export default function ProductStatCard() {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
 
        <SectionTitle title={'Products'}/>
        <ProductMenuBtn/>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop:'15px'}}>
        {statData.map((val, key) => {
          const {title, value, rateInfo} = val;
          return <SingleProductStat key={key} title={title} value={value} rateInfo={rateInfo}/>
        })}
        
      </div>
    </div>
  )
}
