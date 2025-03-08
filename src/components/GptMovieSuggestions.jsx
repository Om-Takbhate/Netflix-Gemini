import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {

  const gptMovies = useSelector(store => store.gpt.gptMovies)

  if (!gptMovies) return <></>;



  return (
    <div className='bg-black px-2 md:px-12 py-1 pb-8 mt-44 mx-2 bg-opacity-80'>
      <MovieList title={"Results"} movies={gptMovies} />
    </div>
  )
}

export default GptMovieSuggestions