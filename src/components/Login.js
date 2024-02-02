import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateDate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase_config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setSignInForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate the form data
    const msg = checkValidateDate(email.current.value, password.current.value);
    setErrorMsg(msg);
    if (msg) return;

    //if no error, then submit the form
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName?.current?.value, photoURL:
              "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
          }).then(() => {
            const {uid,email,displayName,photoURL} = user; 
            dispatch(addUser({ uid, email, displayName, photoURL }));
       
            console.log(user);
            navigate("/browse")
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className=" ">
      <Header />
      <div className="absolute w-lvw h-dvh z-0 overflow-hidden">
        <img
          className="bg-cover overflow-auto min-h-full min-w-full -z-1 "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg_img"
        />
      </div>
      <div className="bg-black bg-opacity-50 absolute w-full h-dvh z-0">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute right-8 left-8 mx-auto my-28 h-fit w-96 rounded-lg bg-black p-10  text-slate-200 bg-opacity-70 min-w-8 "
        >
          <h1 className="py-4 text-3xl font-bold ">
            {isSignInForm ? "Sign In" : "Sign Up"}
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
            className=" bg my-4 w-full bg-red-700 p-4 rounded-lg"
            onClick={handleButtonClick}
          >
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
    </div>
  );
}

export default Login;
