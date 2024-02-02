import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase_config";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Body() {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid: uid, email: email, displayName: displayName,photoURL:photoURL } = user;
        dispatch(addUser({ uid, email, displayName,photoURL }));
        
      } else {
        dispatch(addUser(null));
      }
    });
  }, []);
      
      
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
