"use client"
import React from 'react'
import DateTime from './date'
import Link from 'next/link'
import Search from './search'
import Icons from './icons'
import { signOut, useSession } from 'next-auth/react'

const Header = () => {
  const { data } = useSession()
  console.log(data)
  return (
    <header
    className='flex items-center justify-between py-6'
    >
      <div className='flex flex-col items-center justify-center space-y-4'>
        <DateTime />
        <Icons />
      </div>
      
      <div className='flex flex-col items-center justify-center space-y-2'>
        <Link href="/" className='font-extrabold text-7xl'>BYTEREN</Link>
        <span className='relative text-xl text-lightGray before:absolute before:w-7 before:h-[.01rem] before:bg-lightGray before:-left-9 before:top-3 after:absolute after:w-7 after:h-[.01rem] after:bg-lightGray after:-right-9 after:top-3'>UNLOCKING TECH WONDERS!</span>
      </div>
      <div className='flex text-lg font-light text-lightGray flex-col items-center justify-center space-y-3'>
        {
          !data ? (
            <p className='pb-4 border-b border-[rgba(171, 171, 171)]'>
              <Link href="/auth/signin">LOGIN</Link> / 
              <Link href="/register"> REGISTER</Link> 
            </p>
          ) : (
            <button className="" onClick={signOut}>Sign Out</button> 
          )
        }
        <Search />
      </div>
    </header>
  )
}

export default Header