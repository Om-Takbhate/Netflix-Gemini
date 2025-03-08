import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NETFLIX_LOGO } from '../utils/constants'
import { toggleGptSearchView } from '../utils/store/slices/gptSlice';
import { changeLanguage } from '../utils/store/slices/configSlice';
import lang from '../utils/languageConstants';

const Header = () => {


  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

  const language = useSelector(store => store.config.lang)
  const showGptSearchPage = useSelector(store => store.gpt.showGptSearch)

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
        dispatch(removeUser())
      })
      .catch((error) => {

      });
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(addUser({ uid, email, displayName, photoURL }))
        navigate('/browse')
      } else {
        //when user sign outs
        dispatch(removeUser())
        navigate('/')
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])

  const showGpt = useSelector(store => store.gpt.showGptSearch)
  //handle GPT toggle click
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView(!showGpt))
  }

  const handleLangugaeChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-center items-center flex-col md:flex-row md:justify-between'>
      <div>
        <img className='w-32 ' src={NETFLIX_LOGO} alt="" />
      </div>

      {user ? (
        <div className='flex items-center p-2 gap-2 '>
          {showGpt ?
            <select name="" id="" className='bg-black text-white px-2 py-1' onChange={handleLangugaeChange}>
              <option value="en">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
            </select> : ""
          }
          <button className='text-black py-1 px-2 rounded mx-3 bg-white' onClick={handleGptSearchClick}>{showGpt ? 'Home' : 'GPT Search'}</button>
          <img className='w-10 h-10 rounded-md' src={user?.photoURL || "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"} alt="user icon" />
          <button onClick={handleSignout} className='text-white font-bold sm:inline hidden'>Sign Out</button>
        </div>
      ) : ""}
    </div>
  )
}

export default Header