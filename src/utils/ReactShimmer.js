import React from 'react'
import {
   ShimmerSectionHeader,
   ShimmerText,
   ShimmerThumbnail,
} from 'react-shimmer-effects'
const n = 10
const ReactShimmer = () => {
   return (
      <div className="rounded-2xl overflow-x-scroll flex gap-4 opacity-35 no-scrollbar">
         {[...Array(n)].map((i) => (
            <div key={i}>
               <ShimmerThumbnail
                  height={180}
                  width={150}
                  className="rounded-2xl"
               />
               <ShimmerText line={2} gap={10} className="-mt-5 " />
            </div>
         ))}
      </div>
   )
}

const YtLoader = () => {
   return (
      <div className="w-screen ">
         <div className="aspect-video h-screen w-screen mt-14 left-0">
            <ShimmerThumbnail height={550} className=" " />
            <ShimmerText line={5.5} gap={10} className="-mt-5 " />
         </div>
      </div>
   )
}
 
export { ReactShimmer, YtLoader  }
