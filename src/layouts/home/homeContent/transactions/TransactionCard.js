import React from 'react'
import TransactionId from '../../../../components/transactionCard/TransactionId'
import TransactionImage from '../../../../components/transactionCard/TransactionImage'
import TransactionDate from '../../../../components/transactionCard/TransactionDate'
import TransactionStatus from '../../../../components/transactionCard/TransactionStatus'
import TransactionName from '../../../../components/transactionCard/TransactionName'

export default function TransactionCard({image, name, status, dateTime, id}) {
  return (
    <div>
      <TransactionImage/>
      <TransactionName name={name}/>
      <TransactionDate dateTime={dateTime}/>
      <TransactionStatus status={status}/>
      <TransactionId id={id}/>
    </div>
  )
}
