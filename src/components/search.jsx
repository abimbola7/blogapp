import React from 'react';
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='text-center px-2 py-2 shadow-md text-black cursor-pointer relative'>
      <CiSearch className='text-2xl'/>
    </div>
  )
}

export default Search