import React from 'react'
import SearchBar from '../components/SearchBar'
import HomeContainer from '../components/home_component/HomeContainer'
import UnitsToggle from '../components/UnitsToggle'
import ThemeToggle from '../components/ThemeToggle'
const Home = () => {
  return (
    <>
      <div style={{ margin: '1rem 0' }}>
        <ThemeToggle />
        <UnitsToggle />
      </div>
      <SearchBar />

      <HomeContainer />
    </>
  )
}

export default Home
