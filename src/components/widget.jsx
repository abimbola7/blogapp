import Link from 'next/link'
import React from 'react'

const Widget = () => {
  return (
    <div
    className='flex items-center justify-center w-full py-4 mt-6 border-t border-b border-black'
    >
    <div className="flex mx-auto space-x-20 w-fit">
      {
        [
          [ "NEWS", "/" ],
          [ "MOBILE", "/category/mobile" ],
          [ "TABLET", "/category/tablet" ],
          [ "GADGETS", "/category/gadgets" ],
          [ "CAMERA", "/category/camera" ],
          [ "DESIGN", "/category/design" ], 
          [ "MORE", "/category/more" ], 
        ].map(([name, link])=>(
          <Link href={link} key={link} className='text-xl font-bold '>
            {name}
          </Link>
        ))
      }
    </div>
    </div>
  )
}

export default Widget