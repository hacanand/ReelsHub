import React from 'react'
import { FaCirclePlay } from 'react-icons/fa6'
import { IoIosInformationCircleOutline } from 'react-icons/io'

function VideoTitle({ title, overview }) {
   return (
      <div className=" absolute w-screen mt-14 md:mt-0 aspect-video md:pt-[20%] px-6 md:px-12 text-white md:bg-gradient-to-r from-black">
         <div className=" md:h-[50px] md:max-h-[70px] md:w-[600px] md:min-w-[100px]">
            <h1 className="text-xl md:mt-0 mt-14 md:ml-0 -ml-4 md: md:text-6xl font-bold ">{title}</h1>
            <p className=" hidden md:inline-block py-6 text-lg w-full max-h-[150px] ">
               {overview}
            </p>
            <div >
               <button className="font-bold text-white mt-12 -ml-5 md:ml-2  md:bg-orange-500 md:border-2  md:border-orange-500 md:px-2 md:py-2 rounded-md md:hover:bg-orange-500 hover:text-black transition duration-300 ease-in-out">
                  <div className=" flex flex-row ml-2">
                     <FaCirclePlay className=" size-12 md:size-10" />
                     <h1 className=" hidden md:inline-block font-bold mt-1.5 ml-1">play</h1>
                  </div>
               </button>
               <button className="hidden md:inline-block mx-2  p-2 font-bold text-white mt-6 ml-4 bg-opacity-90 border-2 border-orange-300 px-1 py-2 rounded-md hover:bg-orange-200 hover:text-black transition duration-300 ease-in-out">
                  <div className=" flex flex-row ml-2">
                     <IoIosInformationCircleOutline className="  size-10" />
                     <h1 className="font-bold mt-1.5 ml-1">More Info</h1>
                  </div>
               </button>
            </div>
         </div>
      </div>
   )
}

export default VideoTitle
