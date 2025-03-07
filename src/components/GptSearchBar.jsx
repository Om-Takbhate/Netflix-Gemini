import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)
  return (
    <div className='md:pt-[10%] sm:pt-[20%] pt-[30%] flex justify-center w-[100vw]'>
        <form action="" className='bg-black mx-3 rounded-lg p-1 sm:w-[80%] w-[90%]' >
            <input type="text" placeholder={lang[langKey]?.gptSearchPlaceholder} className='p-3 py-2 px-3 m-2 sm:w-[75%] w-[60%]' />
            <button className='bg-red-600 text-white rounded-lg py-2 px-2 m-2 ml-1 text-center sm:w-[20%] w-[30%] '>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar