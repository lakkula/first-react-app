import React from 'react'
//import './menuSection.css'
import styles from'./menuSection.module.css'

export default function MenuItem({title}) {
  return (
    <div 
      className={styles.menuitem}
      style={{
        display:'flex',
        gap:'10px',
        justifyContent:'space-between',
        padding:'10px 20px',
        borderRadius:'7px',
        cursor:'pointer'
        }}
      >
      <div style={{display:'flex', gap:'10px'}}>
        <div style={{width:'20px', height:'20px', backgroundColor:'gray'}}
        ></div>
        <p>{title}</p>
      </div>
      <div style={{width:'20px', height:'20px', backgroundColor:'red', padding:'2px', borderRadius:'3px'}}>
        <p style={{color:'white'}}>12</p>
      </div>
    </div>
  )
}
