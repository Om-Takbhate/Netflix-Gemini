import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36'>
      <img className='w-full h-full object-contain object-center' src={IMG_CDN_URL + posterPath} alt="movie card image" />  
    </div>
  )
}

export default MovieCard