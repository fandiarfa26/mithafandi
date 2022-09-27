import React from 'react'

const CoupleName = ({from}) => {
  return (
    <div className='flex items-center justify-center w-full gap-4 px-8 mb-5 text-4xl lg:px-0 lg:text-7xl'>
      <span className='self-start lg:self-auto font-handwriting'>{from === 'Fandi' ? 'Fandi':'Mitha'}</span>
      <span className='font-handwriting'>&</span>
      <span className='self-end lg:self-auto font-handwriting'>{from === 'Mitha' ? 'Fandi':'Mitha'}</span>
    </div>
  )
}

export default CoupleName