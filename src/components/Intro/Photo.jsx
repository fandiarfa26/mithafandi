import React from 'react'
import introImage from '../../assets/images/intro.jpg'

const IntroPhoto = () => {
  return (
    <div className='w-full lg:w-1/2'>
      <div className='flex items-center justify-center w-full lg:justify-end lg:h-screen' >
        <img src={introImage} alt="mitha & fandi" className='w-2/5 translate-y-5 border-4 border-white shadow-xl lg:translate-y-0 lg:border-8 lg:shadow-2xl lg:w-2/3 lg:mr-20' />
      </div>
    </div>
    )
}

export default IntroPhoto