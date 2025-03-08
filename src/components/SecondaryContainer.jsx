import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store?.movies)

  return (
    <div className='bg-black px-2 md:px-12 py-1'>
      <div className='lg:-mt-[120px] md:-mt-[40px] sm:mt-[30px] xs:mt-0 relative z-60'>
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        <MovieList title="Action" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer