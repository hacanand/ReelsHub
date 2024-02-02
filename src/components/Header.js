import React from "react";
import { FaUser } from "react-icons/fa";
import netflixLogo from "../components/assets/netflix_logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase_config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

  // @ts-ignore
  
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error")
})
    
  }
  return (
    <div className="absolute top-0 flex z-10 justify-between   w-full bg-gradient-to-b from-black to-transparent px-36 py-2">
      <img className="w-52" src={netflixLogo} alt="" />

      {user&& <div className="flex p-2">
        <img src={user?.photoURL}  className="w-12 mt-6 h-12"/>
        <button onClick={handleSignOut} className="font-bold text-white">Sign out</button>
      </div>}
    </div>
  );
}

export default Header;
