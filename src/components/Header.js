import React, { useEffect } from 'react'

import Logo from '../components/assets/Designer.png'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase_config'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { FaHome, FaSearch, FaSignOutAlt } from 'react-icons/fa'
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
      <div className=" fixed top-0  z-10  md:w-full bg-gradient-to-b from-black to-transparent px-20 py-0 bg-black  sm:bg-blue-950 md:bg-green-950 flex flex-col justify-center md:flex-row md:justify-between md:h-16   rounded">
         <div>
            <img className="md:w-52 md:mx-0" src={Logo} alt="" />
         </div>

         {user && (
            <div className="flex md:p-2 justify-center md:justify-center">
               {showGptSearch && (
                  <select
                     name=""
                     id=""
                     className=" mt-4 mx-8 bg-gray-400 bg-opacity-80 focus:outline-none rounded-sm cursor-pointer"
                     onChange={handleLanguageChange}
                  >
                     {SUPPORTED_LANGUAGES.map((lang) => (
                        <option key={lang.value} value={lang.value}>
                           {lang.label}
                        </option>
                     ))}
                  </select>
               )}
               <div className="mt-4 font-bold text-gray-300 hover:text-green-600 transition duration-300 ease-in-out cursor-pointer">
                  {showGptSearch ? (
                     <FaHome
                        className="size-7 -mx-4 hover:size-7 absolute"
                        onClick={handleGptSearchClick}
                     />
                  ) : (
                     <FaSearch
                        className="size-7 -mx-4 hover:size-7 "
                        onClick={handleGptSearchClick}
                     />
                  )}
               </div>
               <div>
                  <button
                     onClick={handleSignOut}
                     className="font-bold text-white mt-2 ml-4  p-2 rounded-md  hover:text-red-700 hover:text-[sdfa] transition duration-300 ease-in-out"
                  >
                     <FaSignOutAlt className="size-7 mt-" />
                  </button>
               </div>
            </div>
         )}
      </div>
   )
}

export default Header
