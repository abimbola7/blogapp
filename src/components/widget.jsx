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
          [ "MOBILE", "/mobile" ],
          [ "TABLET", "/tablet" ],
          [ "GADGETS", "/gadgets" ],
          [ "CAMERA", "/camera" ],
          [ "DESIGN", "/design" ], 
          [ "MORE", "/more" ], 
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