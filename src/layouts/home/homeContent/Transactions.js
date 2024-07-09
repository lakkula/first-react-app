import React from 'react'
import TransactionCard from './transactions/TransactionCard'
import phoneIcon from '../../../assets/images/phone.jpg'
import laptopIcon from '../../../assets/images/laptop.jpg'
import productIcon from '../../../assets/images/box.png'
import SectionTitle from '../../../components/common/SectionTitle'

const transactionData = [
  {
  image: phoneIcon,
  name:'iPhone 14 Pro Max',
  status:'Completed',
  dateTime:'Jul 21st 2022 - 15:31',
  id:'634653rhdht',
},
{
  image: laptopIcon,
  name:'MacBook Pro M1 13"',
  status:'Pending',
  dateTime:'Jul 20th 2022 - 10:11',
  id:'8765mbeurf',
},
{
  image: productIcon,
  name:'Roughneck Sweater',
  status:'Pending',
  dateTime:'Jul 19th 2022 - 09:07',
  id:'9463fyfjfkj',
},
{
  image: phoneIcon,
  name:'iPhone 14 Pro Max',
  status:'Completed',
  dateTime:'Jul 21st 2022 - 15:31',
  id:'634653rhdht',
},
{
  image: laptopIcon,
  name:'MacBook Pro M1 13"',
  status:'Pending',
  dateTime:'Jul 20th 2022 - 10:11',
  id:'8765mbeurf',
},
{
  image: productIcon,
  name:'Roughneck Sweater',
  status:'Pending',
  dateTime:'Jul 19th 2022 - 09:07',
  id:'9463fyfjfkj',
},
{
  image: phoneIcon,
  name:'iPhone 14 Pro Max',
  status:'Completed',
  dateTime:'Jul 21st 2022 - 15:31',
  id:'634653rhdht',
},
];

export default function Transactions() {
  return (
    <div style={{}}>
      <SectionTitle title={'Transactions'}/>
      {transactionData.map((val, key) => {
        const {image, name, status, dateTime, id} = val;
        return (
          <div key={key} style={{marginTop:'20px'}}>
            <TransactionCard 
              image={image} 
              name={name} 
              status={status} 
              dateTime={dateTime} 
              id={id}
              />
          </div>
          );
      })}
    </div>
  )
}
