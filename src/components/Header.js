import React, { useEffect } from 'react'
 
import netflixLogo from '../components/assets/netflix_logo.png'
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
              navigate('/login')
             
            }
       })
      //unsubscribe when 
      return () => unsubscribe();
    }, [])
    return (
        <div className="absolute top-0 flex z-10 justify-between   w-full bg-gradient-to-b from-black to-transparent px-24 py-0">
            <img className="w-52" src={netflixLogo} alt="" />

            {user && (
                <div className="flex p-2">
                    <img src={user?.photoURL} className="w-12 rounded-[50%] mt-6 h-12" />
                    <button
                        onClick={handleSignOut}
                        className="font-bold text-white mb-2"
                    >
                        Sign out
                    </button>
                </div>
            )}
        </div>
    )
}

export default Header
