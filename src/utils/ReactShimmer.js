import React from 'react'
import {ShimmerText, ShimmerThumbnail } from 'react-shimmer-effects'
 const n = 10;
const ReactShimmer = () => {
  return (
     <div className="rounded-2xl overflow-x-scroll flex gap-4 opacity-35">
        {[...Array(n)].map((i) => (
           <div>
              key={i}
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

export default ReactShimmer;