import React from 'react'
import SearchInputBox from '../../../components/searchBar/SearchInputBox'
import NotificationIcon from '../../../components/searchBar/NotificationIcon'
import ProfileSection from '../../../components/searchBar/ProfileSection'

export default function SearchBar() {
  return (
    <div style={{display: 'flex'}}>
      <SearchInputBox/>
      <NotificationIcon/>
      <ProfileSection/>
    </div>
  )
}
