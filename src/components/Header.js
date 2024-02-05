import React, { useEffect } from 'react'
 
import Logo from '../components/assets/Designer.png'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase_config'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

function Header() {
    const dispatch = useDispatch()
    // @ts-ignore
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
            })
            .catch((error) => {
                navigate('/error')
            })
    }
    useEffect(() => {
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                const {
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                } = user
                dispatch(addUser({ uid, email, displayName, photoURL }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
              navigate('/')
             
            }
       })
      //unsubscribe when 
      return () => unsubscribe();
    }, [])
    return (
       <div className="absolute top-0 flex z-10 justify-between w-full bg-gradient-to-b from-black to-transparent px-20 py-0">
          <img className="w-52 mt-3" src={Logo} alt="" />

          {user && (
             <div className="">
                
                <button
                   onClick={handleSignOut}
                   className="font-bold text-white mt-5 ml-4 border-2 border-orange-500 px-2 py-2 rounded-md hover:bg-orange-500 hover:text-black transition duration-300 ease-in-out"
                >
                   Sign out
                </button>
             </div>
          )}
       </div>
    )
}

export default Header
