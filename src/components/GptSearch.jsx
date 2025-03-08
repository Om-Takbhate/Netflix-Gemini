import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import {NETFLIX_BG} from '../utils/constants'
import { useSelector } from 'react-redux'

const GptSearch = () => {


  return (
    <div className='w-full'>
      <div className='fixed -z-10'>
        <img className='w-[100vw] h-[100vh] object-cover brightness-20' src={NETFLIX_BG} alt="" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch