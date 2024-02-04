import React from 'react'
import { FaCirclePlay } from 'react-icons/fa6'
import { IoIosInformationCircleOutline } from 'react-icons/io'

function VideoTitle({ title, overview }) {
  return (
    <div className=" w-screen  aspect-video  pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <div className=' h-[50px] max-h-[70px] w-[600px] min-w-[100px]'>
        <h1 className="text-6xl font-bold ">{title}</h1>
        <p className="py-6 text-lg w-full">{overview}</p>
        <div>
          <button className=" bg-gray-100 rounded-xl bg-opacity-70 text-white p-2 px-6 hover:bg-opacity-60">
            <div className=" flex flex-row ml-2">
              <FaCirclePlay className="  size-10" />{' '}
              <h1 className="font-bold mt-1.5 ml-1">play</h1>
            </div>
          </button>
          <button className=" mx-2 bg-gray-700 rounded-xl bg-opacity-90 text-white p-2 px-3 hover:bg-opacity-70">
            <div className=" flex flex-row ml-2">
              <IoIosInformationCircleOutline className="  size-10" />{' '}
              <h1 className="font-bold mt-1.5 ml-1">More Info</h1>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle
