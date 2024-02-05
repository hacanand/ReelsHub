import React from 'react'
import { FaCirclePlay } from 'react-icons/fa6'
import { IoIosInformationCircleOutline } from 'react-icons/io'

function VideoTitle({ title, overview }) {
   return (
      <div className=" absolute w-screen  aspect-video  pt-[20%] px-12  text-white bg-gradient-to-r from-black">
         <div className=" h-[50px] max-h-[70px] w-[600px] min-w-[100px]">
            <h1 className="text-6xl font-bold ">{title}</h1>
            <p className="py-6 text-lg w-full">{overview}</p>
            <div>
               <button className="font-bold text-white mt-6 ml-4  bg-orange-500 border-2 border-orange-500 px-2 py-2 rounded-md hover:bg-orange-500 hover:text-black transition duration-300 ease-in-out">
                  <div className=" flex flex-row ml-2">
                     <FaCirclePlay className="  size-10" />{' '}
                     <h1 className="font-bold mt-1.5 ml-1">play</h1>
                  </div>
               </button>
               <button className=" mx-2  p-2 font-bold text-white mt-6 ml-4 bg-opacity-90 border-2 border-orange-300 px-1 py-2 rounded-md hover:bg-orange-200 hover:text-black transition duration-300 ease-in-out">
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
