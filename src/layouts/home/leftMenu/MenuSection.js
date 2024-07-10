import React from 'react'
import MenuTitle from '../../../components/menuSection/MenuTitle'
import MenuItem from '../../../components/menuSection/MenuItem'

export default function MenuSection({title, itemList}) {
  return (
    <div>
        <MenuTitle title={title}/>
        {itemList.map((val, key) => {
          const {title} = val;
          return (
            <div key={key} style={{margin:'15px'}}>
              <MenuItem title={title}/>
            </div>
          )
        })}
    </div>
  )
}
