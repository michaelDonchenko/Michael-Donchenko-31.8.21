import React from 'react'
import SearchBar from '../components/SearchBar'
import HomeContainer from '../components/home_component/HomeContainer'
import HomeHead from '../components/home_component/HomeHead'

const Home = () => {
  return (
    <>
      <HomeHead />
      <SearchBar />
      <HomeContainer />
    </>
  )
}

export default Home
