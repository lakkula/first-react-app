import React from 'react'
import BreadcrumbItem from '../../../components/breadcrumbs/BreadcrumbItem'
import BreadcrumbSeparator from '../../../components/breadcrumbs/BreadcrumbSeparator'

export default function Breadcrumbs() {
  return (
    <div style={{display: 'flex'}}>
      <BreadcrumbItem/>
      <BreadcrumbSeparator/>
      <BreadcrumbItem/>
    </div>
  )
}
