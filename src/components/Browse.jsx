import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../utils/customHooks/usePopularMovies'
import useUpcomingMovies from '../utils/customHooks/useUpcomingMovies'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  return (
    <div>
      <Header />
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  )
}

export default Browse