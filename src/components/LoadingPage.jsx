import React from 'react'
import {BsHeart} from 'react-icons/bs'
import bgFlower from '../assets/images/bg_flower2.jpg'

const LoadingPage = () => {
  return (
    <div className='w-screen h-screen bg-fixed bg-center bg-cover' style={{ backgroundImage: `url(${bgFlower})`}}>
      <div className='flex flex-col items-center justify-center w-screen h-screen text-coklat-light bg-opacity-80 bg-ijo-dark'>
        
          
          <div className="relative mb-5 text-5xl lg:text-6xl">
            <BsHeart/> 
            <BsHeart className='absolute inset-0 animate-ping'/>
          </div>
          
        
        <div className='text-lg'>Tunggu yaa...</div>
      </div>
    </div>
    
  )
}

export default LoadingPage