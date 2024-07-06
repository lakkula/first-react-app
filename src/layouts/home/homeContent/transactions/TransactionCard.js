import React from 'react'
import TransactionId from '../../../../components/transactionCard/TransactionId'
import TransactionImage from '../../../../components/transactionCard/TransactionImage'
import TransactionDate from '../../../../components/transactionCard/TransactionDate'
import TransactionStatus from '../../../../components/transactionCard/TransactionStatus'
import TransactionName from '../../../../components/transactionCard/TransactionName'

export default function TransactionCard({image, name, status, dateTime, id}) {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <TransactionImage image={image}/>
      <div style={{marginLeft:'15px'}}>
        <TransactionName name={name}/>
        <TransactionDate dateTime={dateTime}/>
      </div>
      <div style={{marginLeft:'80px', textAlign:'right'}}>
        <TransactionStatus status={status}/>
        <TransactionId id={id}/>
      </div>
    </div>
  )
}
