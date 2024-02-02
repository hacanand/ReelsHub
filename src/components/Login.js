import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignInForm ,setSignInForm] = useState(true); // [1
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <form className="absolute right-8  left-8   mx-auto my-36 w-3/12 rounded-lg bg-black p-12 text-slate-200 bg-opacity-90">
        <h1 className="py-4 text-3xl font-bold ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm? null :
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 w-full p-2  bg-gray-700 rounded-lg"
          />
        }
        <input
          type="text"
          placeholder="Email Address"
          className="my-4 w-full p-2 bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 w-full p-2  bg-gray-700 rounded-lg"
        />

        <button className=" bg my-4 w-full bg-red-700 p-4 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h4 className="text-center">
          {isSignInForm ? "New to Netflix?" : "Already a member?"}
          <span
            className="text-red-700 font-bold cursor-pointer"
            onClick={toggleSignInForm}
          >
            {" "}
            {isSignInForm ? " Sign Up now." : " Sign In now."}
          </span>
        </h4>
      </form>
    </div>
  );
}

export default Login;
