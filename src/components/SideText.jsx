import React from 'react'
import {FaHeart} from 'react-icons/fa'

const SideText = () => {
  return (
    <div className='sticky top-0 z-10 flex items-center w-screen gap-10 p-2 lg:p-3 lg:w-auto lg:h-screen lg:flex-col'>
      <div className="flex flex-col items-center gap-1 px-3 py-1 text-xs bg-white border-2 border-white shadow-xl lg:bg-transparent lg:shadow-none lg:px-4 lg:py-2 lg:text-base text-slate-900">
        <span className='font-bree'>M</span>
        <FaHeart className='w-3 h-3'/>
        <span className='font-bree'>F</span>
      </div>
      <div className='flex-1 border border-transparent border-dashed lg:border-slate-900'></div>
      <div className="flex flex-col items-center gap-1 px-3 py-1 text-xs bg-white border-2 border-white shadow-xl lg:bg-transparent lg:shadow-none lg:px-4 lg:py-2 lg:text-base text-slate-900">
        <span className='font-bree'>17</span>
        <span className='font-bree'>/</span>
        <span className='font-bree'>11</span>
      </div>
    </div>
  )
}

export default SideText