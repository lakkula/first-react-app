import React from 'react'
import LeftMenu from './home/LeftMenu'
import HomeContent from './home/HomeContent'

export default function Home() {
  return (
    <div style={{display: 'flex'}}>
    <LeftMenu/>
    <HomeContent/>
    </div>
  )
}
