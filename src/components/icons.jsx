import React from 'react'
import { RiTwitterXLine } from "react-icons/ri";
import { LuFacebook } from "react-icons/lu";
import { CiInstagram } from "react-icons/ci";

const Icons = () => {
  const icons = [
    { icon : <RiTwitterXLine key={1}/>, link : "", color : "black" },
    { icon : <LuFacebook key={2}/>, link : "", color : "blue" },
    { icon : <CiInstagram key={3}/>, link : "", color : "red" },
  ]
  return (
    <div
    className='flex space-x-3'
    >
      {
        icons.map(i=>(
          <span key={i.color} className={`text-xl hover:text-[${i.color}] cursor-pointer`}>{i.icon}</span>
        ))
      }
    </div>
  )
}

export default Icons