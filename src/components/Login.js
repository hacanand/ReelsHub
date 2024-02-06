import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateDate } from '../utils/Validate'
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   updateProfile,
} from 'firebase/auth'
import { auth } from '../utils/firebase_config'

import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import {BG_Img, LOGO}  from '../utils/constants'

function Login() {
   const dispatch = useDispatch()

   const [isSignInForm, setSignInForm] = useState(true)
   const email = useRef(null)
   const password = useRef(null)
   const fullName = useRef(null)
   const [errorMsg, setErrorMsg] = useState(null)

   const toggleSignInForm = () => {
      setSignInForm(!isSignInForm)
   }
   const handleButtonClick = () => {
      //validate the form data
      const msg = checkValidateDate(email.current.value, password.current.value)
      setErrorMsg(msg)
      if (msg) return

      //if no error, then submit the form
      if (!isSignInForm) {
         createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
         )
            .then((userCredential) => {
               const user = userCredential.user
               updateProfile(user, {
                  displayName: fullName?.current?.value,
                  photoURL: LOGO,
               }).then(() => {
                  const { uid, email, displayName, photoURL } = user
                  dispatch(addUser({ uid, email, displayName, photoURL }))
               })
            })
            .catch((error) => {
               const errorCode = error.code
               const errorMessage = error.message
               setErrorMsg(errorCode + '-' + errorMessage)
            })
      } else {
         signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
         )
            .then((userCredential) => {
                
            })
            .catch((error) => {
               const errorCode = error.code
               const errorMessage = error.message
               setErrorMsg(errorCode + '-' + errorMessage)
            })
      }
   }
   return (
      <div className=" ">
         <Header />
         <div className="absolute w-full h-[1125px] z-0 select-none ">
            <img
               className=" object-cover crop min-h-full min-w-full -z-1 "
               src={BG_Img}
               alt="bg_img"
            />
         </div>
         <div className="bg-black bg-opacity-50 absolute w-full h-[1125px] z-0">
            <form
               onSubmit={(e) => e.preventDefault()}
               className=" select-none absolute right-8 left-8 mx-auto my-32 h-fit w-96 rounded-lg bg-black p-10  text-slate-200 bg-opacity-70 min-w-8 "
            >
               <h1 className="py-4 text-3xl font-bold ">
                  {isSignInForm ? 'Sign In' : 'Sign Up'}
               </h1>
               {isSignInForm ? null : (
                  <input
                     ref={fullName}
                     type="text"
                     placeholder="Full Name"
                     className="my-4 w-full p-2 bg-gray-700 rounded-lg"
                  />
               )}
               <input
                  ref={email}
                  type="text"
                  placeholder="Email Address"
                  className="my-4 w-full p-2 bg-gray-700 rounded-lg"
               />
               <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className="my-4 w-full p-2  bg-gray-700 rounded-lg"
               />
               <p className=" text-red-400 font-bold ">{errorMsg}</p>

               <button
                  className=" bg my-4 text-2xl font-bold w-full bg-red-700 p-4 rounded-lg"
                  onClick={handleButtonClick}
               >
                  {isSignInForm ? 'Sign In' : 'Sign Up'}
               </button>
               <h4 className="text-center">
                  {isSignInForm ? 'New to Netflix?' : 'Already a member?'}
                  <span
                     className="text-red-700 font-bold cursor-pointer"
                     onClick={toggleSignInForm}
                  >
                     {isSignInForm ? ' Sign Up now.' : ' Sign In now.'}
                  </span>
               </h4>
            </form>
         </div>
      </div>
   )
}

export default Login
