import React from 'react'
import Logo from '../../components/leftMenu/Logo'
import MenuSection from './leftMenu/MenuSection'

const menuData = [
  {
    menuTitle: 'Administrator',
    itemList: [
      {
        title: 'Dashboard',
      },
      {
        title: 'Messages',
      },
      {
        title: 'Social',
      },
      {
        title: 'Documents',
      },
    ],
  },
  {
    menuTitle: 'Settings',
    itemList: [
      {
        title: 'Roles',
      },
      {
        title: 'Requests',
      },
      {
        title: 'Preferences',
      },
    ],
  },
];

export default function LeftMenu() {
  return (
    <div>
        <Logo/>
        {menuData.map((val, key) =>{
          const {menuTitle, itemList} = val;
          return <MenuSection key={key} title={menuTitle} itemList={itemList}/>
        })}
        
    </div>
  )
}
