import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../utils/customHooks/usePopularMovies'
import useUpcomingMovies from '../utils/customHooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  return (
    <div>
      <Header />
      {
        showGptSearch ?
          <GptSearch /> :
          <div>
            <MainContainer />
            <SecondaryContainer />
          </div>
      }
    </div>
  )
}

export default Browse