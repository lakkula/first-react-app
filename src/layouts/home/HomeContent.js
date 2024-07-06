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
    <div>
        <SearchBar/>
        <Breadcrumbs/>
        <StatFiguresRow/>
        <div style={{display: 'flex'}}>
          <div>
            <ProductStat/> 
            <Transactions/> 
          </div>
          <div>
            <AnalyticsGraph/>
            <div style={{display: 'flex'}}>
              <OrdersGraph/>
              <PromotionalCard/>
            </div>
          </div>
        </div>
    </div>
  )
}
