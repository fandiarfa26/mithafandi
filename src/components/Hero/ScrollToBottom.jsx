import React from 'react'
import { BiMouse } from 'react-icons/bi'

const ScrollToBottom = () => {
  return (
    <div className='absolute inset-x-0 bottom-0 flex flex-col items-center justify-center'>
          <div className="flex items-center gap-2 text-white">
            <span className="text-sm ">Scroll ke bawah</span>
            <BiMouse className='w-6 h-6'/> 
          </div>
          <div className="py-4 border border-white"></div>
        </div>
  )
}

export default ScrollToBottom