import React from 'react'

const CountdownItem = ({num, label}) => {
  return (
    <div className='text-center'>
      <div className='text-xl font-semibold lg:text-5xl'>{("0" + num).slice(-2)}</div>
      <div className='text-xs lg:text-lg'>{label}</div>
    </div>
  )
}

export default CountdownItem