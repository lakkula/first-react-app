import React from 'react'

export default function TransactionStatus({ status }) {
  return (
    <div>
      <p style={{color: status === 'Completed' ? 'tomato' : 'black'}}>{status}</p>
    </div>
  )
}
