import React from 'react'
import SearchBar from './homeContent/SearchBar'
import Breadcrumbs from './homeContent/Breadcrumbs'
import StatFiguresRow from './homeContent/StatFiguresRow'
import ProductStat from './homeContent/ProductStat'
import AnalyticsGraph from './homeContent/AnalyticsGraph'
import Transactions from './homeContent/Transactions'
import OrdersGraph from './homeContent/OrdersGraph'
import PromotionalCard from './homeContent/PromotionalCard'
import SectionWrapper from '../common/SectionWrapper'

export default function HomeContent() {
  return (
    <div style={{width: '100%'}}>
        <SearchBar/>
        <Breadcrumbs/>
        <SectionWrapper>
          <StatFiguresRow/>
        </SectionWrapper>
          
        <div style={{display: 'flex'}}>
          <div>
          <SectionWrapper>
            <ProductStat/> 
          </SectionWrapper>
              
          <SectionWrapper>
            <Transactions/> 
          </SectionWrapper>
          </div>
          <div>
          <SectionWrapper>
            <AnalyticsGraph/> 
          </SectionWrapper>
            <div style={{display: 'flex', marginTop:'40px', alignItems:'baseline',gap:'40px'}}>
            <SectionWrapper>
              <OrdersGraph/> 
            </SectionWrapper>
              <PromotionalCard/>
            </div>
          </div>
        </div>
    </div>
  )
}
