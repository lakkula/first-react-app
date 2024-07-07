import React from 'react'
import SearchBar from './homeContent/SearchBar'
import Breadcrumbs from './homeContent/Breadcrumbs'
import StatFiguresRow from './homeContent/StatFiguresRow'
import ProductStat from './homeContent/ProductStat'
import AnalyticsGraph from './homeContent/AnalyticsGraph'
import Transactions from './homeContent/Transactions'
import OrdersGraph from './homeContent/OrdersGraph'
import PromotionalCard from './homeContent/PromotionalCard'

export default function HomeContent() {
  return (
    <div style={{width: '100%'}}>
        <SearchBar/>
        <Breadcrumbs/>
        <div style={{padding:'20px'}}>
          <StatFiguresRow/>
        </div>
        <div style={{display: 'flex'}}>
          <div>
            <div style={{padding:'20px'}}>
              <ProductStat/> 
            </div>
            <div style={{padding:'20px'}}>
              <Transactions/> 
            </div>
          </div>
          <div>
            <div style={{padding:'20px'}}>
              <AnalyticsGraph/>
            </div>
            <div style={{display: 'flex'}}>
              <div style={{padding:'20px'}}>
                <OrdersGraph/>
              </div>
              <PromotionalCard/>
            </div>
          </div>
        </div>
    </div>
  )
}
