import React from "react";
import netflixLogo from "../components/assets/netflix_logo.png";

function Header() {
  return (
    <div className="absolute top-0 z-10   w-full bg-gradient-to-b from-black to-transparent px-44 py-2">
      <img className="w-52" src={netflixLogo} alt="" />
    </div>
  );
}

export default Header;
