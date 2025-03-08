import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {NETFLIX_BG} from '../utils/constants'
import { useRef } from 'react'
import { auth } from '../utils/firebase'
import { updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/store/slices/userSlice';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const emailRef = useRef(null)
  const nameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleButtonClick = (e) => {
    //prevent submiting behaviour of form
    e.preventDefault()

    const email = emailRef?.current?.value
    const name = nameRef?.current?.value
    const password = passwordRef?.current?.value

    //validate form data
    const message = checkValidData(email, password)
    setErrorMessage(message)


    if (message) {
      //data is not valid
      return
    }
    //data is valid
    //lets signin or signup the user

    if (!isSignInForm) {
      //its sign up form

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://avatars.githubusercontent.com/u/150035512?s=400&u=ef11c89ac907fb4cde7e1ef8172d9173b3c15bcc&v=4"
          })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser

                dispatch(addUser({ uid, email, displayName, photoURL }))
                
                navigate('/browse')
              })
              .catch((error) => {
                
              });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode, errorMessage)
        });

    }
    else {
      //sign in logic

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const {uid, email, photoURL, displayName} = user
          dispatch(addUser({uid,email,photoURL, displayName}))
          navigate('/browse')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, errorMessage)
        });
    }
  }


  const toggleSignInForm = () => {
    setIsSignInForm(prev => !prev)
  }

  return (
    <div>
      <Header />
      <div className='fixed '>
        <img className='w-[100vw] h-[100vh] object-cover brightness-50' src={NETFLIX_BG} alt="" />
      </div>
      <form action="" className='absolute w-[90%] sm:w-[50%] md:w-5/12 lg:w-4/12 p-8 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-70 rounded-lg'>
        <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm ? "" : <input type="text" ref={nameRef} placeholder='Full name' className='p-4 my-1 w-full bg-gray-900 rounded-lg' />}
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