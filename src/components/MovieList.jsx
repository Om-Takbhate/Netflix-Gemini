import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className='px- py-2 text-white -ms-overflow-style:none'>
      <h1 className='text-2xl mt-1 py-2 w-full font-bold'>{title}</h1>
      <div className='flex overflow-x-scroll '>
        <div className='flex gap-4'>
          {
            movies?.map(movie => <MovieCard key={movie?.id} posterPath={movie?.poster_path} />)
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList