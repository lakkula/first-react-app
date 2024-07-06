import React from 'react'

export default function TransactionStatus({ status }) {
  return (
      <p
      style={{
        color: status === 'Completed' ? 'tomato' : 'black',
        fontSize:'14px',
        fontWeight:'500'
      }}
      >
        {status}
        </p>
  )
}
