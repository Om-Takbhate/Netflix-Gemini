import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='bg-gradient-to-r  from-black w-[100%] aspect-video pt-32 sm:pt-[37vh] sm:px-12 px-4 absolute text-white '>
        <h1 className='sm:text-3xl text-md font-bold'>{title}</h1>
        <p className='py-6 text-md hidden lg:block sm:text-xl w-1/4'>{overview.slice(0,40)+'...'}</p>
        <div className='py-3'>
            <button className='sm:px-9 sm:text-lg px-3 mr-4 py-1 sm:py-2 bg-white text-black bg-gray-500 rounded hover:opacity-75'>➤ Play</button>
            <button className='sm:px-7 px-2 py-1 sm:py-2 rounded text-lg text-white bg-gray-500'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle