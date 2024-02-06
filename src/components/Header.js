import React, { useEffect } from 'react'

import Logo from '../components/assets/Designer.png'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase_config'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { FaHome, FaSearch } from 'react-icons/fa'
import { toggleGptSearchView } from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import { changeLang } from '../utils/configSlice'

function Header() {
   const dispatch = useDispatch()
   // @ts-ignore
   const user = useSelector((state) => state.user)
   const navigate = useNavigate()
   // @ts-ignore
   const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
   const handleSignOut = () => {
      signOut(auth)
         .then(() => {})
         .catch((error) => {
            navigate('/error')
         })
   }
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            const {
               uid: uid,
               email: email,
               displayName: displayName,
               photoURL: photoURL,
            } = user
            dispatch(addUser({ uid, email, displayName, photoURL }))
            navigate('/browse')
         } else {
            dispatch(removeUser())
            navigate('/')
         }
      })
      //unsubscribe when
      return () => unsubscribe()
   }, [])
   const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView())
   }
   const handleLanguageChange = (e) => {
      dispatch(changeLang(e.target.value))
   }
   return (
      <div className="absolute top-0 flex z-10 justify-between w-full bg-gradient-to-b from-black to-transparent px-20 py-0">
         <img className="w-52 mt-3" src={Logo} alt="" />

         {user && (
            <div className="flex p-2">
               {showGptSearch && (
                  <select
                     name=""
                     id=""
                     className="m-4 mx-10 bg-orange-100 bg-opacity-80 focus:outline-none rounded-sm"
                     onChange={handleLanguageChange}
                  >
                     {SUPPORTED_LANGUAGES.map((lang) => (
                        <option key={lang.value} value={lang.value}>
                           {lang.label}
                        </option>
                     ))}
                  </select>
               )}
               <div className="mt-4 font-bold text-gray-300 hover:text-orange-600 transition duration-300 ease-in-out cursor-pointer">
                  {showGptSearch ? (
                     <FaHome
                        className="size-7 -mx-6 hover:size-7 absolute"
                        onClick={handleGptSearchClick}
                     />
                  ) : (
                     <FaSearch
                        className="size-7 -mx-6 hover:size-7 absolute"
                        onClick={handleGptSearchClick}
                     />
                  )}
               </div>

               <button
                  onClick={handleSignOut}
                  className="font-bold text-white mt-4 ml-4 border-2 border-orange-500 px-1 p-2 rounded-md hover:bg-orange-500 hover:text-black transition duration-300 ease-in-out"
               >
                  Sign out
               </button>
            </div>
         )}
      </div>
   )
}

export default Header
