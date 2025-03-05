import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='bg-gradient-to-r from-black w-[100%] aspect-video pt-72 px-12 absolute text-white'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-6 text-xl w-1/4'>{overview.slice(0,155)+'...'}</p>
        <div>
            <button className='px-9 text-lg mr-4 py-2 bg-white text-black bg-gray-500 rounded'>➤ Play</button>
            <button className='px-7  py-2 rounded text-lg text-white bg-gray-500'>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle