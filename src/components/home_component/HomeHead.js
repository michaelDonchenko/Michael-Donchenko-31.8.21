import React from 'react'
import UnitsToggle from '../UnitsToggle'
import ThemeToggle from '../ThemeToggle'

const HomeHead = () => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <ThemeToggle />
      <UnitsToggle />
    </div>
  )
}

export default HomeHead
