import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {NETFLIX_LOGO} from '../utils/constants'

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

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
        const {uid, email, displayName, photoURL} = user
        dispatch(addUser({uid, email, displayName, photoURL }))
        navigate('/browse')
      } else {
        //when user sign outs
        dispatch(removeUser())
        navigate('/')
      }
    });

    return () => unsubscribe()
  }, [])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center'>
      <div>
        <img className='w-32' src={NETFLIX_LOGO} alt="" />
      </div>
      {user ? (<div className='flex justify-between items-center p-2 gap-2 '>
        <img className='w-10 h-10 rounded-md' src={user?.photoURL || "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"} alt="user icon" />
        <button onClick={handleSignout} className='text-white font-bold'>Sign Out</button>
      </div>) : ""}
    </div>
  )
}

export default Header