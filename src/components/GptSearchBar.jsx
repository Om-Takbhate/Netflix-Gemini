import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import model from '../utils/geminiConfig'
import { addGptMovieResult } from '../utils/store/slices/gptSlice'
import { useRef } from 'react'
import { API_OPTIONS } from '../utils/constants'

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)

  const inputRef = useRef(null)

  const dispatch = useDispatch()

  const searchMovieFromTMDB = async (movieName) => {
    const res = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const data = await res.json()
    return data.results[0]
  }

  const handleGptSearchClick = async () => {
    let searchText = inputRef.current.value

    const gptQuery = 'Act as a movie recommender system and suggest movies for the given query : ' + searchText + '. only give 10 movie names and the movie names should be comma seperated. for exmaple, result for query : Dilwale,Andaz Apna Apna,Hera Pheri,Chupke Chupke.'

    const gptResult = await model.generateContent(gptQuery);
    const gptMovies = gptResult.response.text().split(',')

    //for each movie , find out the movie from tmdb

    const promiseArray = gptMovies.map(movie => searchMovieFromTMDB(movie))

    const tmdbResults = await Promise.all(promiseArray)
    dispatch(addGptMovieResult(tmdbResults))
  }


  return (
    <div className='md:pt-[10%] sm:pt-[20%] pt-[30%] flex justify-center w-full'>
      <form action="" className='bg-black mx-1 rounded-lg p-1 sm:w-[80%] w-[90%]' onSubmit={(e) => e.preventDefault()} >
        <input type="text" ref={inputRef} placeholder={lang[langKey]?.gptSearchPlaceholder} className='p-3 py-2 px-3 m-2 sm:w-[75%] w-[60%]' />
        <button className='bg-red-600 text-white rounded-lg py-2 px-2 m-2 ml-1 text-center sm:w-[20%] w-[25%] ' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar