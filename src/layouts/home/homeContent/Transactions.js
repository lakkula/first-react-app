import React from 'react'
import TransactionsTitle from '../../../components/transactions/TransactionsTitle'
import TransactionCard from './transactions/TransactionCard'

const transactionData = [
  {
  image:'',
  name:'iPhone 14 Pro Max',
  status:'Completed',
  dateTime:'Jul 21st 2022 - 15:31',
  id:'634653rhdht',
},
{
  image:'',
  name:'MacBook Pro M1 13"',
  status:'Pending',
  dateTime:'Jul 20th 2022 - 10:11',
  id:'8765mbeurf',
},
{
  image:'',
  name:'Roughneck Sweater',
  status:'Pending',
  dateTime:'Jul 19th 2022 - 09:07',
  id:'9463fyfjfkj',
},
];

export default function Transactions() {
  return (
    <div style={{backgroundColor: 'orange'}}>
      <TransactionsTitle/>
      {transactionData.map((val, key) => {
        const {image, name, status, dateTime, id} = val;
        return (<TransactionCard 
          key={key} 
          image={image} 
          name={name} 
          status={status} 
          dateTime={dateTime} 
          id={id}
          />
          );
      })}
    </div>
  )
}
