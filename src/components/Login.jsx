import React from 'react'
import Header from './Header'
import { useState } from 'react'
import {checkValidData} from '../utils/validate'
import {useRef} from 'react'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleButtonClick = (e)=>{
    //prevent submiting behaviour of form
    e.preventDefault()

    //validate form data
    const message = checkValidData(emailRef.current.value,passwordRef.current.value)
    setErrorMessage(message)  

    //continue to sign in and sign up , dataif 

  }


  const toggleSignInForm = () => {
    setIsSignInForm(prev => !prev)
  }

  return (
    <div>
      <Header />
      <div className='absolute '>
        <img className='w-[100vw] h-[100vh] object-cover brightness-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg" alt="" />
      </div>
      <form action="" className='absolute w-[90%] sm:w-[50%] md:w-5/12 lg:w-4/12 p-8 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg'>
        <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm ? "" :<input type="text" placeholder='Full name' className='p-4 my-1 w-full bg-gray-900 rounded-lg' />}
        <input type="text" placeholder='Email address' ref={emailRef} className='p-4 my-4 w-full bg-gray-900 rounded-lg' required />
        <input type="password" placeholder='Password' ref={passwordRef} className='p-4 my-1 w-full bg-gray-900 rounded-lg' />
        <p className='text-red-500 font-sans pl-1 pt-1'>{errorMessage}</p>
        <button className='p-4 my-8 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='text-center cursor-pointer ' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login